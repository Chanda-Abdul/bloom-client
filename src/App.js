import React from "react";
import PlantService from "../src/actions/PlantService";
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

  static contextType = PlantContext;

  componentDidMount() {
    this.plantService.getAllPlants().then((garden) => {
      this.context.garden = garden;
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );
  }
}
