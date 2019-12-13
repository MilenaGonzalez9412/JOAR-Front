import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {

  render() {
    return (
      <>
        <div className="">
          <h1 className="display-4">Menú Principal</h1>
          <p className="lead">Rectificador de Culatas JOAR</p>
        </div>
        <ul className="list-group Link  text-center ">
          <Link to="/inventario">
            <li className="list-group-item">Inventario</li>
          </Link>
          {/* <Link>
            <li className="list-group-item">Servicios</li>
          </Link>
          <Link>
            <li className="list-group-item">Domicilios</li>
          </Link>

          <Link>
            <li className="list-group-item dropdown">Empleados</li>
          </Link>
          <Link>
            <li className="list-group-item" href="#">
              Nómina
            </li>
          </Link> */}
        </ul>
      </>
    );
  }
}

export default Main;
