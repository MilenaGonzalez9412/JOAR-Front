import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import "./Styles.css";

export default class ProductInformation extends Component {
  //Se definen las propiedades del producto.
  productName = React.createRef();
  productPrice = React.createRef();
  productQuantity = React.createRef();
  componentDidMount() {
    const t = this.props.location.state;
    console.log(t);
  }

  //Se crea la función que realizar el guardado de los datos que se ingresarán en los inputs de la pantalla.
  createProduct = async () => {
    const productName = this.productName.current.value;
    const price = this.productPrice.current.value;
    const quantity = this.productQuantity.current.value;

    const product = {
      Producto: productName,
      Precio: price,
      Cantidad: quantity
    };

    //Realiza la conexión con la API y se le envía el producto a crear
    const URL = `${API_URL}/createProduct`;
    console.log(URL);
    await Axios.post(URL, product).then(resp => {
      console.log(resp);
    });
  };

  render() {
    return (
      <div className="col">
        <div className="row encabezado">
          <Link to="/inventario">
            <li className="list-group-item button">Atrás</li>
          </Link>
        </div>

        <form onSubmit={this.createProduct}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Nombre Producto:
              </span>
            </div>
            <input
              ref={this.productName}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Nombre Producto"
            />
          </div>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Precio:
              </span>
            </div>
            <input
              ref={this.productPrice}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Precio"
            />
          </div>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Cantidad:
              </span>
            </div>
            <input
              ref={this.productQuantity}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Cantidad"
            />
          </div>
          <hr className="mb-4" />
          <button
            className="btn btn-primary btn-lg btn-block bg-purple text-white lh-100"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
