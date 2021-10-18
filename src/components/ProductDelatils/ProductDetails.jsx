import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './style.css';
class ProductDetails extends React.Component {
  render() {

    let product = this.props.Products.filter(
      (ele) => ele.id === parseInt(this.props.match.params.id)
    )[0];
    let CustomeView = this.props.Products.filter(
      (ele) => {
        // هيرجعلي منتجين قبله و  منتجين بعده  
        return ele.id !== product.id && ele.id > product.id - 3 && ele.id < product.id + 3;
      }
    );
    return (
      <React.Fragment>
        <div className="container productDetails">
          <div className="product row justify-content-center">
            <div className="col-md-4 productImage">
              <img src={`/images/shop_images/${product.image}`} alt="" />
            </div>
            <div className="col-md-6 box-info">
              <h4 className="name">{product.name}</h4>
              <div className="reviewBox lead">
                <div>
                  <del className="discountprice"><span>$</span>{product.discountprice}</del>
                  <span className="price"><span>$</span>{product.price}</span>
                </div>
                <div>
                  <div className="strar-icon d-inline">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="reviews">({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="color lead">color: <span>{product.color}</span></p>
              <div className="borderBall" style={{ borderColor: `${product.color}` }}>
                <span className="ball" style={{ background: `${product.color}` }}></span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="buyProduct">
                <div className="count lead ">
                  <button onClick={() => this.props.onDecrement(product)}>-</button>
                  <span>{product.count}</span>
                  <button onClick={() => this.props.onIncrement(product)}>+</button>
                </div>
                <button onClick={
                  () => {
                    if (window.localStorage.length !== 0) {
                      this.props.AddButton(product)
                    } else {
                      this.props.register()
                    }
                  }
                } className="addCart">add to cart</button>
                <div onClick={() => {
                  if (window.localStorage.length !== 0) {
                    this.props.AddWish(product)
                  } else {
                    this.props.register()
                  }
                }
                } className="loveBox">
                  <i className="fas fa-heart love"></i>
                </div>
              </div>
              <div className="brand">
                <div>
                  <img src="/images/b1.png" alt="" />
                </div>
                <div>
                  <img src="/images/b2.png" alt="" />
                </div>
                <div>
                  <img src="/images/b1.png" alt="" />
                </div>
                <div>
                  <img src="/images/b2.png" alt="" />
                </div>
              </div>
              <div className="linksNo1">
                <button className="linksPages">Returns &amp; delivery</button>
                <NavLink className="linksPages" to="/Contact">ask a question</NavLink>
              </div>
              <span className="sku">sku: n/a</span>
              <div className="Categories">
                <span>Categories: </span>
                <NavLink className="linksPages" to="/">all</NavLink>
                <NavLink className="linksPages" to="/MenProducts">new Arrival</NavLink>
                <NavLink className="linksPages" to="/WomenProducts">dress</NavLink>
                <NavLink className="linksPages" to="/WomenProducts">tops</NavLink>
                <NavLink className="linksPages" to="/MenProducts">t-shirt</NavLink>
                <NavLink className="linksPages" to="/KidsProducts">kids</NavLink>
              </div>
              <div className="links">
                <a href="https://www.google.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="fab fa-twitter"></i>
                </a >
                <a href="https://www.google.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-center lead alsoHeading">you may also like</h1>
          <div className="product-body alsoView row justify-content-around">
            {CustomeView.map((ele) => {
              return (
                <div className="col-md-2 product" key={ele.id}>
                  <div className="image">
                    <img onClick={() => this.props.history.push(`/product/${ele.id}`)}
                      src={`/images/shop_images/${ele.image}`}
                      alt="test"
                    />
                  </div>
                  <div className="box-info">
                    <span className="offical">official store</span>
                    <p className="name">{ele.name}</p>
                    <p className="brand">barnd: <span>{ele.brand}</span></p>
                    <p className="price">EGP {ele.incrementPrice}</p>
                    <del className="discoundPrice">EGP {ele.discountprice}</del>
                    <span className="discount">-{ele.discount}%</span>
                    <div className="star-icon ">
                      <div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <button
                        className="btn"
                        onClick={() => {
                          if (window.localStorage.length !== 0) {
                            this.props.AddWish(ele)
                          } else {
                            this.props.register()
                          }
                        }}
                      >
                        <i className="fas fa-heart "></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default ProductDetails;
