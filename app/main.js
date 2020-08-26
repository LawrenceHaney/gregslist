import CarsController from "./Controllers/CarsController.js";
import HomesController from "./Controllers/HomesController.js";
console.log(4)
class App {
  carsController = new CarsController();
  homesController = new HomesController()
}

window["app"] = new App();
