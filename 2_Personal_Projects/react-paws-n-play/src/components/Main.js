import React from "react";
import Product from "./Product";

export default function Main(props) {
  const {products, onAdd} = props;
  return (
    <main className="block col-2">
        <div className="product-container">
          {products.map((product) => (
            <Product key={products.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      
    </main>
  )
}