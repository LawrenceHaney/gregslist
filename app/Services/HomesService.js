import Home from "../Models/Homes.js";
import STORE from "../store.js";

class HomesService {
  removeHome(id){
    let homeIndex = STORE.State.homes.findIndex(h => h.id === id)
      if (homeIndex === -1){
        console.error("invalid id")
        return
      }
      STORE.State.homes.splice(homeIndex, 1)
  }

  createHome(rawHome){
    let home = new Home(rawHome)
    STORE.State.homes.push(home)

  }
}


const SERVICE = new HomesService();
export default SERVICE;