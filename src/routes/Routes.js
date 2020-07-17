import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage'
import ViewGardenPage from '../components/ViewGardenPage/ViewGardenPage'
import PlantCarePage from '../components/PlantCarePage/PlantCarePage'
import AddPlantPage from '../components/AddPlantPage/AddPlantPage'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/view" component={ViewGardenPage} />
        <Route exact path="/information" component={PlantCarePage} />
        <Route exact path="/add" component={AddPlantPage} />
        <Route exact path="/*" component={NotFoundPage} />
      </Switch>
    );
  }
}
