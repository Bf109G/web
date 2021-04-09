import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MenusLayout } from "@/layouts/MenusLayout";

export class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MenusLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
