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

  static contextType = PlantContext;

  componentDidMount() {
    this.plantService.getAllPlants().then((garden) => {
      this.context.garden = garden;
    });
  }

  setPlant = (garden) => {
    this.setState({ garden: garden });
  };

  render() {
    const value = {
      garden: this.state.garden,
      setPlant: this.setPlant,
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
