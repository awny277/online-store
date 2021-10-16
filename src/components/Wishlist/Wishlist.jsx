import React from 'react';
import './style.css'
class Wishlist extends React.Component {
  render() {
    let product = this.props.Products.map((ele) => ele)
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="lead text-center wishHeader">{product.length === 0 ? "There are no wishes yet" : "This is your wish"}</h1>
          <div className="product-body wishList row justify-content-around">
            {product.map((ele) => {
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
                        onClick={() => this.props.DeleteWish(ele)}
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
      </React.Fragment>
    );
  }
}

export default Wishlist;