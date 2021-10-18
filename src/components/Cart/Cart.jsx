import React, { Component } from "react";
import Swal from "sweetalert2";

import "./style.css";
class Cart extends React.Component {
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'ORDER CONFIRMED',
          'Thank You For Choosing Us',
          'success'
        )
        this.props.onConfirm()
      }
    })
  }
  render() {
    let product = this.props.Products;
    let totalprice = this.props.total;
    return (
      <React.Fragment >
        <div className="container cartHeader">
          <h1 className="CartName"> {totalprice === 0 ? "Cart" : `Cart (${product.map((ele) => ele.incart).length} item)`}</h1>
          <div>{totalprice === 0 ?
            <div className=" text-center EmptCart">
              <div className="emptCartImg">
                <img src="images/c2.png" alt="" />
              </div>
              <h2>Your cart is empty!</h2>
              <p className="lead">Browse our categories and discover our best deals!</p>
              <button onClick={() => this.props.history.push("/MenProducts")}>start shopping</button>
            </div> :
            <div className="row d-none d-lg-flex">
              <div className="C-header col-md-6">
                <h2>item</h2>
              </div>
              <div className="C-header col-md-2">
                <h2 >QUANTITY</h2>
              </div>
              <div className="C-header col-md-2">
                <h2>UNIT PRICE</h2>
              </div>
              <div className="C-header col-md-2">
                <h2>SUBTOTAL</h2>
              </div>
            </div>
          }</div>
          {product.map((ele) => (
            <div key={ele.id} className="row cartPage">
              <div className=" col-xs-12 col-sm-12 col-md-6 ">
                <div className="content">
                  <div className="image">
                    <img src={`images/shop_images/${ele.image}`} alt="" />
                  </div>
                  <div className="info">
                    <span className="brand">seller: {ele.brand}</span>
                    <h4 className="name">{ele.name}</h4>
                    <p className="lead free d-none d-md-block">Your order is eligible for Free Shipping with shop Express or shop Primo. (Excludes large and bulky items)</p>
                    <div className="uinitPrice uinitPrice2 d-sm-block d-md-none">
                      <h3>EGP {ele.price}</h3>
                      <del>EGP {ele.discountprice}</del>
                      <p>saving: EGP {ele.price}</p>
                    </div>
                    <div className="saved-Delete d-none d-md-flex">
                      <div onClick={() => this.props.AddWish(ele)} className="save">
                        <i className="fas fa-heart love"></i>
                        <span>Add it to your wishlist</span>
                      </div>
                      <div onClick={() => this.props.onDelete(ele)} className="Delete">
                        <i className="fas fa-trash"></i>
                        <span >remove</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  col-sm-4 col-md-2 d-none d-sm-block cartCount ">
                <div>
                  <button onClick={() => this.props.onIncrement(ele)} className="bttn">+</button>
                  <h3>{ele.count}</h3>
                  <button onClick={() => this.props.onDecrement(ele)} className="bttn">-</button>
                </div>
              </div>
              <div className=" col-sm-4 col-md-2 d-none d-sm-block uinitPrice text-center">
                <div >
                  <h3>EGP {ele.price}</h3>
                  <del>EGP {ele.discountprice}</del>
                  <p>saving: EGP {ele.saving}</p>
                </div>
              </div>
              <div className=" d-none d-sm-block col-sm-4 col-md-2 text-center Subtotal">
                <h2>EGP {ele.price}</h2>
              </div>
              <div className="smallView">
                <div className="smallLoveRemove">
                  <div onClick={() => this.props.AddWish(ele)} className="save">
                    <i className="fas fa-heart love"></i>
                  </div>
                  <div onClick={() => this.props.onDelete(ele)} className="Delete">
                    <i className="fas fa-trash"></i>
                    <span >remove</span>
                  </div>
                </div>
                <div className="smallButtonCount">
                  <button onClick={() => this.props.onIncrement(ele)} className="bttn">+</button>
                  <h3>{ele.count}</h3>
                  <button onClick={() => this.props.onDecrement(ele)} className="bttn">-</button>
                </div>
              </div>
            </div>
          ))}
          <div className="total">{totalprice === 0 ? "" :
            <div className="totalItem">
              <div className="totalPrice">
                <h3>total: </h3>
                <h3>EGP {totalprice}</h3>
              </div>
              <p className="lead">Shipping fees not included yet</p>
              <div className="totalBtn">
                <button onClick={() => this.props.history.push("/MenProducts")} className="continue">continue shopping</button>
                <button onClick={() => { this.confirm() }} className="checkout">continue to checkout</button>
              </div>
            </div>
          }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
