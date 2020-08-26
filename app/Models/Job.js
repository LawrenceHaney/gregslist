import { generateId } from "../utils.js";
export default class JOB {
  // Object Destructuring
  constructor({title, location, rate, contact, discription, image}) {
    this.title = title
    this.location = location
    this.rate = rate
    this.contact = contact
    this.discription = discription || "No discription provided"
    this.image = image || "http://placehold.it/100x100"
    this.id = generateId()
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.image}" alt="">
          <div class="card-body">
              <h3 class="card-title">${this.title}</h3>
              <h6> ${this.location} - ${this.rate}</h6>
              
              <p class="card-text">${this.discription}</p>
              <div class="d-flex justify-content-between">
                  <p>${this.contact}</p>
              </div>
              <button class="btn btn-danger" onclick="app.jobsController.removeJob('${this.id}')">Nah Fam</button>
          </div>
      </div>
    </div>`
  }
}