import React, { Component } from 'react';
// import { Kids_Products } from '../Products';
class KidsProducts extends React.Component {
  // state = {
  //   Products: Kids_Products
  // }
  render() { 
    let product = this.props.Products.filter((ele)=> ele.id > 14)
    console.log(product)
    return (
      <div>
        {product.map((ele)=>(
          <ul>
            <li>{ele.id}</li>
            <li>{ele.name}</li>
            <li>{ele.price}</li>
            <li><img src={`images/shop_images/${ele.image}`} alt="" /></li>
          </ul>
        ))}
      </div>
    );
  }
}
 
export default KidsProducts;