import React, { Component } from 'react';
import { Female_Products } from '../Products';
class WomenProducts extends React.Component {
  render() { 
    let product = this.props.Products.filter((ele)=>(
      ele.id > 7 && ele.id < 15
    ))
    return (<div>
      {product.map((ele)=>(
        <ul>
          <li>{ele.id}</li>
          <li>{ele.name}</li>
          <li>{ele.price}</li>
          <li><img src={`images/shop_images/${ele.image}`} alt="" /></li>
          <li><button className="btn btn-outline-primary" onClick={()=> this.props.AddButton(ele)}><i class="fas fa-shopping-cart"></i></button></li>
        </ul>
      ))}
    </div>);
  }
}
 
export default WomenProducts;