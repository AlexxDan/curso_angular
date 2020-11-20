import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Global } from "./../../Global";

export default class Home extends Component {
  state = {
    series: [],
    status: false,
  };
  componentDidMount = () => {
    this.cargarSeries();
  };
  cargarSeries = () => {
    var request = "/api/Series";
    var url = Global.urlexamen + request;
    axios.get(url).then((res) => {
      this.setState({
        series: res.data,
        status: true,
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Lista Serie</h1>
        <div className="row">
          <div className="col-sm-3">
            {this.state.status == true && (
              <React.Fragment>
                {this.state.series.map((serie, i) => {
                  return (
                    <div key={i}>
                      <h3>{serie.nombre}</h3>
                      <img
                        src={serie.imagen}
                        style={{ width: "150px", height: "150px" }}
                      />
                      <p>IDM {serie.puntuacion}</p>
                      <NavLink
                        to={"/personaje/" + serie.idSerie}
                        className="btn btn-success"
                      >
                        Personajes
                      </NavLink>
                      <p>Personajes</p>
                    </div>
                  );
                })}
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
