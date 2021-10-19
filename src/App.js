import "./App.css";
import React from "react";
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
import Footer from "./components/Footer/Footer";
import Wishlist from "./components/Wishlist/Wishlist";
import { ContactUSData } from "./components/Contact/ContactData";
import Swal from "sweetalert2";

class App extends React.Component {
  state = {
    Products: AllProducts,
    TotlaPrice: 0,
    Data: ContactUSData,
  };
  // increment count
  Handelerincrement = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    result[index].count++;
    let price = result[index].incrementPrice;
    let total = this.state.TotlaPrice;
    total += price;
    this.setState({
      Products: result,
      TotlaPrice: total,
    });
  };
  // Decrement count
  HandelerDecrement = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    let price = result[index].incrementPrice;
    let total = this.state.TotlaPrice;
    if (result[index].count > 1) {
      result[index].count--;
      total -= price;
    } else {
      result[index].count = 1;
    }
    this.setState({
      Products: result,
      TotlaPrice: total,
    });
  };
  // Add Product to Cart
  HandelerAddCart = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    let price = result[index].incrementPrice;
    let total = this.state.TotlaPrice;
    if (result[index].incart === false) {
      result[index].incart = true;
      total += price;
      window.localStorage.setItem(`borduct ${result[index].name} inCart`, true);
      this.setState({
        Products: result,
        TotlaPrice: total,
      });
    }
  };
  // Delete Product from Cart
  OnDelete = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    let total = this.state.TotlaPrice;
    let price = result[index].incrementPrice;
    if (
      window.localStorage.getItem(`borduct ${result[index].name} inCart`) ===
      `true`
    ) {
      total = total - price * result[index].count;
      result[index].incart = false;
      window.localStorage.setItem(
        `borduct ${result[index].name} inCart`,
        false
      );
      result[index].count = 1;
    }
    this.setState({
      Products: result,
      TotlaPrice: total,
    });
  };
  // Add Product to WishList
  HandelerAddWish = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    // result[index].wish = true;
    result[index].wish = !result[index].wish;
    this.setState({
      Products: result,
    });
  };
  // Delete Product From WishList
  HandelerDeleteWish = (item) => {
    let result = [...this.state.Products];
    let index = result.indexOf(item);
    result[index].wish = false;
    this.setState({
      Products: result,
    });
  };
  // Confirm Checkout
  handlerConfrim = () => {
    let result = [...this.state.Products];
    result = result.map((ele) => {
      window.localStorage.setItem(`borduct ${ele.name} inCart`, false);
      ele.incart = false;
      ele.count = 1;
      return ele;
    });
    let total = this.state.TotlaPrice;
    total = 0;
    this.setState({
      Products: result,
      TotlaPrice: total,
    });
  };
  // Contact Data
  HandelAdddata = (e) => {
    this.state.Data.push(e);
    this.setState({
      Data: this.state.Data,
    });
  };
  // Register // Can't by or wish any product untill Register

  async HandlerReister() {
    const { value: email } = await Swal.fire({
      title: "Register",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });

    if (email) {
      window.localStorage.setItem("email", email);
    }
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });

    if (password) {
      window.localStorage.setItem("password", password);
    }
  }
  render() {
    // window.localStorage.clear();
    return (
      <React.Fragment>
        <NavBar
          count={this.state.Products.filter((ele) => ele.incart).length}
          wish={this.state.Products.filter((ele) => ele.wish).length}
          register={this.HandlerReister}
        />
        <Switch>
          <Route
            path="/Home"
            exact
            render={(props) => (
              <Home
                Products={this.state.Products}
                register={this.HandlerReister}
                {...props}
              />
            )}
          />
          <Route
            path="/MenProducts"
            render={(props) => (
              <MenProducts
                Products={this.state.Products}
                register={this.HandlerReister}
                AddWish={this.HandelerAddWish}
                WishIcon={this.WishIcon}
                {...props}
              />
            )}
          />
          <Route
            path="/WomenProducts"
            render={(props) => (
              <WomenProducts
                Products={this.state.Products}
                register={this.HandlerReister}
                AddWish={this.HandelerAddWish}
                {...props}
              />
            )}
          />
          <Route
            path="/KidsProducts"
            render={(props) => (
              <KidsProducts
                Products={this.state.Products}
                register={this.HandlerReister}
                AddWish={this.HandelerAddWish}
                {...props}
              />
            )}
          />
          <Route
            path="/product/:id/:name?"
            render={(props) => (
              <ProductDetails
                Products={this.state.Products}
                onIncrement={this.Handelerincrement}
                onDecrement={this.HandelerDecrement}
                AddButton={this.HandelerAddCart}
                AddWish={this.HandelerAddWish}
                register={this.HandlerReister}
                {...props}
              />
            )}
          />
          <Route
            path="/WishList"
            render={(props) => (
              <Wishlist
                Products={this.state.Products.filter((ele) => ele.wish)}
                DeleteWish={this.HandelerDeleteWish}
                {...props}
              />
            )}
          />
          <Route path="/About" render={(props) => <About {...props} />} />
          <Route
            path="/Contact"
            render={(props) => (
              <Contact AddData={this.HandelAdddata} {...props} />
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <Cart
                Products={this.state.Products.filter((ele) => ele.incart)}
                total={this.state.TotlaPrice}
                onIncrement={this.Handelerincrement}
                onDecrement={this.HandelerDecrement}
                onDelete={this.OnDelete}
                AddWish={this.HandelerAddWish}
                onConfirm={this.handlerConfrim}
                {...props}
              />
            )}
          />
          <Redirect from="/" to="/Home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
