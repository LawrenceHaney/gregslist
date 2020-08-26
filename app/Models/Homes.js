import { generateId } from "../utils.js";
export default class Home {
  // Object Destructuring
  constructor({address, beds, baths, foots, discription, image, price}) {
    this.address = address
    this.beds = beds
    this.baths = baths
    this.foots = foots
    this.discription = discription || "No discription provided"
    this.image = image || "http://placehold.it/100x100"
    this.price = price
    this.id = generateId()
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card box-shadow list-obj">
          <img class="card-img-top" src="${this.image}" alt="">
          <div class="card-body">
              <h3 class="card-title">${this.address}</h3>
              <h6>Beds: ${this.beds} - Baths: ${this.baths} - Sq foot: ${this.foots}</h6>
              
              <p class="card-text">${this.discription}</p>
              <div class="d-flex justify-content-between">
                  <p>$${this.price.toFixed(2)}</p>
              </div>
              <button class="btn btn-secondary" onclick="app.homesController.removeHome('${this.id}')"> bye</button>
          </div>
      </div>
    </div>`
  }
}