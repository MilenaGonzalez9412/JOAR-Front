import React from "react";
import Main from "../components/Main";
import Layout from "../components/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductsInventory from "../components/ProductsInventory";
import ProductInformation from "../components/ProductInformation";
const App = () => {
  return (
    //Se configuran las rutas que va a tener el aplicativo. 
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Main} />
          <Route exact path="/inventario" component={ProductsInventory} />
          <Route exact path="/informacionProducto" component={ProductInformation} />
          <Route exact path="/crearProducto" component={ProductInformation} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
