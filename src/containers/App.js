import React from "react";
import Main from "../components/Main";
import Layout from "../components/Layout";
import Inventory from "../components/Inventory"
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/main" component={Main} />
        </Layout>
        <Inventory>
          <Route exact path="/inventario" component={Inventory} />
        </Inventory>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
