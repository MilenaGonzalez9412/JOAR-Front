import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import "./Styles.css";

export default class ProductsInventory extends Component {
  //Se cargan los productos al iniciar el componente.
  componentDidMount() {
    this.getProducts();
  }
  state = {
    products: []
  };

  //Consultamos la lista de productos usando Axios para comunicarnos con la API.
  getProducts = async () => {
    const URL = `${API_URL}/products`;
    await Axios.get(URL)
      .then(resp => {
        this.setState({ products: resp.data });
        console.log(this.state.products);
      })
      .catch(error => console.log(error));
  };

  //Eliminamos un producto enviando el id del producto.
  deleteProduct = async function(productId) {
    const URL = `${API_URL}/deleteProduct/${productId}`;
    await Axios.delete(URL).then(resp => {
      console.log(resp);
      this.getProducts();
    });
  };

  render() {
    function List({ data }, x) {
      console.log(x);

      if (!data) {
        return null;
      }
      //Se valida que si existan elementos en la lista para mostrar.
      if (!data) {
        return <p>Lo sentimos, no hay productos para mostrar</p>;
      } else {
        return (
          //Se recorre la lista para mostrarla en la tabla.
          <tbody>
            {data.map((product, i) => (
              <tr key={i}>
                <td>{product.Producto}</td>
                <td>{product.Precio}</td>
                <td>{product.Cantidad}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => x.deleteProduct(product._id)}
                    className="list-group-item"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        );
      }
    }
    return (
      <div className="col">
        <div className="row encabezado">
          <h4>Listado de productos</h4>
          <Link to="/">
            <li className="list-group-item button">Inicio</li>
          </Link>
          <Link to="/crearProducto">
            <li className="list-group-item button">Crear producto</li>
          </Link>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              {/* <th scope="col">Editar</th> */}
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          {List(this.state.products, this)}
        </table>
      </div>
    );
  }
}

ProductsInventory.propType = {
  products: PropTypes.object
};
