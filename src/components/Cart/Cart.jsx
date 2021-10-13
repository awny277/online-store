import React, { Component } from "react";
import "./style.css";
class Cart extends React.Component {
  render() {
    // let product = this.props.Products.map((ele)=> ele)
    return (
      <div>
        {this.props.Products.map((ele) => (
          <ul>
            <li>{ele.id}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Cart;
