import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
class Home extends React.Component {
  render() {
    let newFeture = this.props.Products.filter(
      (ele) => ele.id > 14 && ele.id < 19
    );
    return (
      <React.Fragment>
        <div className="header">
          <div className="header-parg">
            <h2 className="frist-p">
              {" "}
              70%<span> SALE OFF</span>
            </h2>
            <h1>Summer Vibes mode on</h1>
            <NavLink to="/MenProducts" className="btn ">
              SHOP NOW
            </NavLink>
          </div>
          <img src="images/2.png" alt="" />
        </div>
        <main className="container">
          <div className="row text-center Section-info">
            <div
              onClick={() => this.props.history.push("/WomenProducts")}
              className="col-md-4"
            >
              <div className="box1 item">
                <h3>girls clothing</h3>
                <p>world best barads</p>
                <img src="images/1.png" alt="" />
              </div>
            </div>
            <div
              onClick={() => this.props.history.push("/MenProducts")}
              className="col-md-4"
            >
              <div className="box2 item">
                <h3>Boys Clothing</h3>
                <p>world best barads</p>
                <img src="images/2.png" alt="" />
              </div>
            </div>
            <div
              onClick={() => this.props.history.push("/KidsProducts")}
              className="col-md-4"
            >
              <div className="box3 item">
                <h3>kids Clothing</h3>
                <p>world best barads</p>
                <img src="images/3.png" alt="" />
              </div>
            </div>
          </div>
          {/* start Section-Sale */}
          <div className="Section-Sale row justify-content-evenly">
            <div className="kids-sale col-md-5 item">
              <div className="box">
                <p>KIDS FASHION </p>
                <h3>limted offer up to 30%</h3>
                <NavLink to="/KidsProducts" className="btn ">
                  SHOP NOW
                </NavLink>
              </div>
              <img src="images/4.jpg" alt="" />
            </div>
            <div className="kids-sale col-md-5  item">
              <div className="box">
                <p>MEN'S COLLECTION</p>
                <h3>new arrivals up to 50%</h3>
                <NavLink to="/MenProducts" className="btn ">
                  SHOP NOW
                </NavLink>
              </div>
              <img src="images/5.jpg" alt="" />
            </div>
          </div>
          {/* feature products */}
          <h1 className="text-center header-product">feature products</h1>
          <div className="homeProducts row justify-content-around ">
            {newFeture.map((ele) => (
              <div
                onClick={() => this.props.history.push(`/product/${ele.id}`)}
                key={ele.id}
                className="products col-md-2"
              >
                <img src={`images/shop_images/${ele.image}`} alt="" />
                <div className="text-center">
                  <p>{ele.name}</p>
                  <span>{ele.price}$</span>
                  <div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* latest in ladies fashion */}
          <div className="ladies-fashion row  justify-content-center">
            <div className="col-md-4 ladisImages">
              <img src="images/6.png" alt="" />
            </div>
            <div className="ladies-info col-md-5">
              <h2>latest in ladies fashion</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, facilis dolorum. Similique sunt consequatur, obcaecati
                aut libero optio eius molestiae?
              </p>
              <NavLink to="/WomenProducts" className="btn">
                shop now
              </NavLink>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
