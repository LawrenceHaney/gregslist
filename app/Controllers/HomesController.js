import homesService from "../Services/HomesService.js";
import STORE from "../store.js";

function _drawHomes(){
  let homes= STORE.State.homes
  let template = ''
  homes.forEach(h => template += h.Template)
  document.getElementById('homes').innerHTML = template
}

export default class HomesController{
  constructor(){
    _drawHomes()
  }

  removeHome(id){
    homesService.removeHome(id)
    _drawHomes()
  }
  createHome(){
    event.preventDefault()
    let form = event.target
    let rawHome = {
      address: form.address.value,
      beds: form.beds.value,
      baths: form.baths.value,
      foots: form.foots.value,
      discription: form.discription.value,
      image: form.image.value,
      price: parseInt(form.price.value)
    }
    homesService.createHome(rawHome)
    _drawHomes()
  }
}