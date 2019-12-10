import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    getProducts = () => {
      
    };

    return (
      <>
        <div className="">
          <h1 className="display-4">Menú Principal</h1>
          <p className="lead">Rectificador de Culatas JOAR</p>
        </div>
        <ul class="list-group Link  text-center ">
          {/* <Link to="/inventory"> */}
          <Link to="{{ pathname: '/inventory', state: { foo: 'bar'} }}">
            <li class="list-group-item">Inventario</li>
          </Link>
          <Link>
            <li class="list-group-item">Servicios</li>
          </Link>
          <Link>
            <li class="list-group-item">Domicilios</li>
          </Link>

          <Link>
            <li class="list-group-item dropdown">Empleados</li>
          </Link>
          <Link>
            <li class="list-group-item" href="#">
              Nómina
            </li>
          </Link>
        </ul>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            {/* <Pricing dataPricing = {data} /> */}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
