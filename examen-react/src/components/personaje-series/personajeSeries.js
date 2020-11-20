import React, { Component } from "react";
import { Global } from "./../../Global";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class personajeSeries extends Component {
  state = {
    personajes: [],
    status: false,
  };
  componentDidMount = () => {
    this.cargarPersonajes();
  };
  cargarPersonajes = () => {
    var request = "/api/Series/PersonajesSerie/" + this.props.id;
    var url = Global.urlexamen + request;
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Personajes</h1>
        {this.state.status == true && (
          <React.Fragment>
            <NavLink to="/" className="btn-warning btn">
              Vover
            </NavLink>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Imagen</th>
                </tr>
              </thead>
              <tbody>
                {this.state.personajes.map((personaje, i) => {
                  return (
                    <tr key={i}>
                      <td>{personaje.idPersonaje}</td>
                      <td>
                        <img
                          src={personaje.imagen}
                          style={{ width: "150px", height: "150px" }}
                        />
                      </td>
                      <td>{personaje.nombre}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </React.Fragment>
        )}
      </div>
    );
  }
}
