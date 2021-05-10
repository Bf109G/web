import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MenusLayout } from "@/layouts/MenusLayout";
import { Provider } from "mobx-react";
import stores from "./store";

export class AppRouter extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MenusLayout} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
