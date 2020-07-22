import config from "../config";
import axios from "axios";

export default class PlantService {
  getAllPlants() {
    return axios.get(config.API_BASE_URL + "/plants").then((res) => {
      const garden = res.data.plants;
      return garden;
    });
  }

  createNewPlant() {
    return axios
      .post(
        config.API_BASE_URL + "/plants"
        // ,
        // { newPlant }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  removePlant() {
      return axios.delete(config.API_BASE_URL + "/plants/" + `${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
}


