import React, { Component } from "react";
import { Global } from "./../../Global";
import { Redirect } from "react-router-dom";
import axios from "axios";
export default class nuevoPersonaje extends Component {
  cajNombre = React.createRef();
  cajImg = React.createRef();
  selectSerie = React.createRef();
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
      });
    });
  };

  registrarPersonaje = (e) => {
    e.preventDefault();
    var id = 1;
    var nombre = this.cajNombre.current.value;
    var img = this.cajImg.current.value;
    var options = this.selectSerie.current.options;

    var idSerie = 0;
    for (var opt of options) {
      if (opt.selected == true) {
        idSerie = parseInt(opt.value);
      }
    }

    var personaje = {
      idPersonaje: id,
      nombre: nombre,
      imagen: img,
      idSerie: idSerie,
    };

    var request = "/api/Personajes";
    var url = Global.urlexamen + request;

    axios.post(url, personaje).then((res) => {
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
        <form onSubmit={this.registrarPersonaje}>
          <label>El id del personaje es auto incremental</label>
          <br />
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="cajNombre"
            ref={this.cajNombre}
          />
          <br />
          <label>Imagen</label>
          <input
            type="text"
            className="form-control"
            name="cajImg"
            ref={this.cajImg}
          />
          <br />
          <label>Serie en la participa</label>
          <select name="selectSerie" ref={this.selectSerie}>
            {this.state.series.map((serie, i) => {
              return (
                <option value={serie.idSerie} key={i}>
                  {serie.nombre}
                </option>
              );
            })}
          </select>
          <button>Registrar Personaje</button>
        </form>
      </div>
    );
  }
}
