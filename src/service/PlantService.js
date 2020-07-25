import config from "../config";
import axios from "axios";

export default class PlantService {
  getAllPlants() {
    return axios.get(config.API_BASE_URL + "/plants").then((res) => {
      const garden = res.data.plants;
      return garden;
    });
  }

  createNewPlant(newPlant) {
    return axios.post(config.API_BASE_URL + "/plants", newPlant).then((res) => {
      return res.data.plant;
    });
  }

  removePlant(id) {
    return axios.delete(config.API_BASE_URL + "/plants/" + id).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }
}
