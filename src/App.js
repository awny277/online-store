import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import MenProducts from "./components/Man/MenProducts";
import NavBar from "./components/NavBar";
import About from "./components/AboutUS/aboutAu";
import Home from "./components/Home/Home";
import WomenProducts from "./components/Woman/Woman";
import KidsProducts from "./components/Kids/Kids";
import { AllProducts } from "./components/Products";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import ProductDetails from "./components/ProductDelatils/ProductDetails";

class App extends React.Component {
  state = {
    Products: AllProducts,
  };
  Handelerincrement = (item) => {
    let product = [...this.state.Products];
    let index = product.indexOf(item);
  };

  HandelerAddCart = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    result[index].incart = !result[index].incart;
    this.setState({
      Products: result,
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          couunt={this.state.Products.filter((ele) => ele.incart).length}
        />
        <Switch>
          <Route
            path="/Home"
            exact
            render={(props) => (
              <Home Products={this.state.Products} {...props} />
            )}
          />
          <Route
            path="/MenProducts"
            render={(props) => (
              <MenProducts
                Products={this.state.Products}
                AddButton={this.HandelerAddCart}
                {...props}
              />
            )}
          />
          <Route
            path="/WomenProducts"
            render={(props) => (
              <WomenProducts
                Products={this.state.Products}
                AddButton={this.HandelerAddCart}
                {...props}
              />
            )}
          />
          <Route
            path="/KidsProducts"
            render={(props) => (
              <KidsProducts
                Products={this.state.Products}
                AddButton={this.HandelerAddCart}
                {...props}
              />
            )}
          />
          <Route
            path="/product/:id/:name?"
            render={(props) => (
              <ProductDetails Products={this.state.Products} {...props} />
            )}
          />
          <Route path="/About" render={(props) => <About {...props} />} />
          <Route path="/Contact" render={(props) => <Contact {...props} />} />
          <Route
            path="/cart"
            render={(props) => (
              <Cart
                Products={this.state.Products.filter((ele) => ele.incart)}
              />
            )}
          />
          <Redirect from="/" to="/Home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
