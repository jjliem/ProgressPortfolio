import React from 'react';

export default function Product(props) {
  const {product, onAdd} = props;

  return (
    <div className="product">
      <img className="small image" width="200rem" height="160" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div className="middle">
        <button className="hover-button" onClick={()=>onAdd(product)}>ADD TO CART</button>
      </div>
    </div>
  )
}
