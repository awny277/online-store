import React, { Component } from "react";
import "./style.css";
class Cart extends React.Component {
  render() {
    let product = this.props.Products;
    let totalprice = this.props.total;
    console.log(totalprice)
    // let TotlaPrice = this.props.Products.map((ele) => ele.price).reduce((acc, curr) => acc + curr);
    // console.log(TotlaPrice)
    return (
      <React.Fragment >
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">name</th>
                <th scope="col">price</th>
                <th scope="col">count</th>
                <th scope="col">increment</th>
                <th scope="col">decrement</th>
                <th scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
              {product.map((ele, index) => (
                <tr key={ele.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{ele.name}</td>
                  <td>{ele.price}$</td>
                  <td>{ele.count}</td>
                  <td><button onClick={() => this.props.onIncrement(ele)} className="btn btn-outline-primary">+</button></td>
                  <td><button onClick={() => this.props.onDecrement(ele)} className="btn btn-outline-primary">-</button></td>
                  <td><button onClick={() => this.props.onDelete(ele)} className="btn btn-outline-primary"><i className="fas fa-trash"></i></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>{totalprice === 0 ? "Your shopping Cart is Empty Add your Shopping" : `${totalprice}$`}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
