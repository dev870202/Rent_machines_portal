import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Categories from "./Pages/Categories";
import SubCategories from "./Pages/SubCategories";
import { DataProvider } from "./UserContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <App />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Categories" component={Categories} />
          <Route exact path="/SubCategories" component={SubCategories} />
        </Switch>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
