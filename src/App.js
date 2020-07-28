import React from "react";
import PlantService from "../src/service/PlantService";
import PlantContext from "./contexts/PlantContext";
import Routes from "./routes/Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.plantService = new PlantService();
  }

  state = {
    garden: []
    }

  componentDidMount() {
    this.plantService.getAllPlants().then((garden) => {
      this.setState({ garden });
    });
  }

  setPlant = (garden) => {
    this.setState({ garden: [...this.state.garden, garden] });
  };

  removePlant = (id) => {
    this.setState({ garden: this.state.garden.filter(plant => plant.id !== id)})
  }

  render() {
    let value = {
      garden: this.state.garden,
      setPlant: this.setPlant,
      removePlant: this.removePlant,
    };
    
    return (
      <PlantContext.Provider value={value}>
        <div>
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </PlantContext.Provider>
    );
  }
}
