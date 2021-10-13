import React from "react";
import "./style.css";
// import imges from 'images/shop_images/bodycon-dress.jpg';
class MenProducts extends React.Component {
  render() {
    let product = this.props.Products.filter((ele) => ele.id < 8);
    return (
      <div className="man-body">
        {product.map((ele, index) => {
          return (
            <ul key={ele.id}>
              <li>{ele.id}</li>
              <li>{ele.name}</li>
              <li>{ele.price}</li>
              <li>
                <img src={`images/shop_images/${ele.image}`} alt="" />
              </li>
              <li>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => this.props.AddButton(ele)}
                >
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default MenProducts;
