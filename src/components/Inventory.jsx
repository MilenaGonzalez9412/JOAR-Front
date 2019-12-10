import React, { Component } from "react";

const Inventory = products => {
  return (
    <div className="col-md-5 order-md-2 mb-4">
      <h3>Listado inventario</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nombre Producto</th>
            <th scope="col">Precio (Unidad)</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;