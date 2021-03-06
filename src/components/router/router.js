import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../auth/privateroute";

import login from "../login/login";
import Estanque from "../estanque";
import Home from "../pages/home/home";
//import registro from "../registro/registro";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Home} />
        <Route exact path={["/login"]} component={login} />
        <PrivateRoute exact path="/estanque" component={Estanque} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Pagina no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
