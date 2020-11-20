import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./../components/menu/menu";
import Home from "./../components/homeSerie/home";
import PersonajesSerie from "./personaje-series/personajeSeries";
import PersonajeNuevo from "./nuevopersonaje/nuevoPersonaje";
import Modificar from "./modificarpersonaje/modificarpersonaje";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/personaje/:idSerie"
            render={(props) => {
              var id = props.match.params.idSerie;
              return <PersonajesSerie id={id} />;
            }}
          />
          <Route path="/newpersonaje" component={PersonajeNuevo} />
          <Route path="/update" component={Modificar} />
        </Switch>
      </BrowserRouter>
    );
  }
}
