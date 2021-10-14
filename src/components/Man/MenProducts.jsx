import React from "react";
import "./style.css";
class MenProducts extends React.Component {
  render() {
    let product = this.props.Products.filter((ele) => ele.id < 8);
    return (
      <React.Fragment>
        <div className="container page-content">
          <div className="row">
            <div className="sidebar col-md-3 d-none d-lg-block">
              <div className="silder-inside">
                <h3>great discount</h3>
                <p className="use-code">use the following propmo code to get amazing discount</p>
                <div className="discount">
                  <p>tenpresent</p>
                  <span>10%</span>
                </div>
                <div className="discount">
                  <p>fivepresent</p>
                  <span>5%</span>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="container">
                <p className="lead productCount">({product.length}) product found</p>
                <div className="product-body row justify-content-around">
                  {product.map((ele) => {
                    return (
                      <div className="col-md-3 product" key={ele.id}>
                        <div className="image">
                          <img onClick={() => this.props.history.push(`/product/${ele.id}`)}
                            src={`images/shop_images/${ele.image}`}
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
                              onClick={() => this.props.AddButton(ele)}
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MenProducts;
