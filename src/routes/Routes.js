import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//import pages

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={} />
        {/* <Route exact path="/budget" component={BudgetPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/create" component={CreateExpensePage} />
        <Route exact path="/learn" component={LearningPage} />
        <Route exact path="/*" component={NotFoundPage} /> */}
      </Switch>
    );
  }
}
