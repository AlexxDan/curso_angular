import React, { Component } from "react";
import { Global } from "./../../Global";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class modificarpersonaje extends Component {
  selectPersonaje = React.createRef();
  slectSerie = React.createRef();

  state = {
    status: false,
    series: [],
    personajes: [],
  };

  componentDidMount = () => {
    this.cargarDatosPersonaje();
    this.cargarDatosSeries();
  };
  cargarDatosPersonaje = () => {
    var request1 = "/api/Personajes";
    var url1 = Global.urlexamen + request1;
    axios.get(url1).then((res) => {
      this.setState({
        personajes: res.data,
      });
    });
  };
  cargarDatosSeries = () => {
    var request = "/api/Series";
    var url = Global.urlexamen + request;
    axios.get(url).then((res) => {
      this.setState({
        series: res.data,
      });
    });
  };

  modificarPersonajeSerie = (e) => {
    e.preventDefault();

    var optionsSeries = this.slectSerie.current.options;
    var optionsPer = this.selectPersonaje.current.options;

    var idSerie = 0;
    var idPer = 0;

    for (var opt of optionsSeries) {
      if (opt.selected == true) {
        idSerie = opt.value;
      }
    }

    for (var opt of optionsPer) {
      if (opt.selected == true) {
        idPer = opt.value;
      }
    }
    var request = "/api/Personajes/" + idPer + "/" + idSerie;
    var url = Global.urlexamen + request;
    axios.put(url, "").then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Personaje a modificar</h1>
        <form onSubmit={this.modificarPersonajeSerie}>
          <label>Personaje</label>
          <select name="selectPersonaje" ref={this.selectPersonaje}>
            {this.state.personajes.map((per, i) => {
              return (
                <option key={i} value={per.idPersonaje}>
                  {per.nombre}
                </option>
              );
            })}
          </select>
          <br />
          <label>Series</label>
          <select name="slectSerie" ref={this.slectSerie}>
            {this.state.series.map((serie, i) => {
              return (
                <option key={i} value={serie.idSerie}>
                  {serie.nombre}
                </option>
              );
            })}
          </select>
          <button>Modificar</button>
        </form>
      </div>
    );
  }
}
