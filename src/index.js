
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// new imports start
import { Provider } from "react-redux";
import configureStore from "store";
// new imports stop
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";
import indexRoutes from "routes/index.jsx";

import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

const hist = createBrowserHistory();
const slideContext = React.createContext("BRCA_03")
const ThemeContext = React.createContext('light');

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={hist}>
    <Switch>

      {indexRoutes.map((prop, key) => {
        console.log("prop ", prop.component.current)
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
      
    </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
