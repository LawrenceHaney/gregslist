import JobsService from "../Services/JobsService.js";
import STORE from "../store.js";

function _drawJobs(){
  let jobs= STORE.State.jobs
  let template = ''
  jobs.forEach(h => template += h.Template)
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController{
  constructor(){
    _drawJobs()
  }

  removeJob(id){
    JobsService.removeJob(id)
    _drawJobs()
  }
  createJob(){
    event.preventDefault()
    let form = event.target
    let rawJob = {
      title: form.title.value,
      location: form.location.value,
      rate: form.pay.value,
      contact: form.contact.value,
      discription: form.discription.value,
      image: form.image.value
    }
    JobsService.createJob(rawJob)
    _drawJobs()
  }
}