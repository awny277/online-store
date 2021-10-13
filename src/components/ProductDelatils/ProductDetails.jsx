import React, { Component } from "react";
class ProductDetails extends React.Component {
  render() {
    let product = this.props.Products.filter(
      (ele) => ele.id === parseInt(this.props.match.params.id)
    )[0];
    return (
      <React.Fragment>
        <h1>{product.id}</h1>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        <h1>{product.discount}</h1>
        <img src={`/images/shop_images/${product.image}`} alt="" />
      </React.Fragment>
    );
  }
}

export default ProductDetails;
