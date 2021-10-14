import React, { Component } from "react";
class ProductDetails extends React.Component {
  render() {
    let product = this.props.Products.filter(
      (ele) => ele.id === parseInt(this.props.match.params.id)
    )[0];
    console.log(product.id)
    let CustomeView = this.props.Products.filter(
      (ele, index) => {
        // هيرجعلي منتج قبله و 3 منتجات بعده  
        return ele.id !== product.id && ele.id > product.id - 2 && ele.id < product.id + 4;
      }
    );
    return (
      <React.Fragment>
        <h1>{product.id}</h1>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        <h1>{product.discount}</h1>
        <img src={`/images/shop_images/${product.image}`} alt="" />

        {CustomeView.map((ele) => {
          return (
            <div key={ele.id}>
              <h1>{ele.id}</h1>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ProductDetails;
