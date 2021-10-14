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
    TotlaPrice: 0
  };
  Handelerincrement = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    result[index].count++;
    let price = result[index].incrementPrice;
    let total = this.state.TotlaPrice
    total += price;
    this.setState({
      Products: result,
      TotlaPrice: total
    })
  };

  HandelerDecrement = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    let price = result[index].incrementPrice;
    let total = this.state.TotlaPrice
    if (result[index].count > 0) {
      result[index].count--;
      total -= price;
    } else {
      result[index].count = 0;
      result[index].incart = false;
    }
    this.setState({
      Products: result,
      TotlaPrice: total
    })
  };

  HandelerAddCart = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    result[index].incart = !result[index].incart;
    this.setState({
      Products: result,
    });
  };

  OnDelete = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    result[index].incart = false;
    let total = this.state.TotlaPrice;
    let price = result[index].incrementPrice;
    total = total - price * result[index].count;
    result[index].count = 0;
    this.setState({
      Products: result,
      TotlaPrice: total
    });
  }
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
                total={this.state.TotlaPrice}
                onIncrement={this.Handelerincrement}
                onDecrement={this.HandelerDecrement}
                onDelete={this.OnDelete}
                // TotlaPrice={this.getTotalPrice}
                {...props}
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
