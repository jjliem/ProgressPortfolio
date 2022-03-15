import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header(props) {
  const { countCartItems } = props;
  return (
      <div className="sticky header">
        <a href="#default" className="logo">Paws N Play</a>
        <div className="header-right">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#sale">Sale</a>
          <a href="#features">Features</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact"><FaUser style={{fontSize: "1.4rem"}}/></a>
          <a href="#cart">
            <FaShoppingCart style={{fontSize: "1.4rem"}}/>
            {" "}
            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            ) : (
              ""
            )}
          </a>
        </div>
    </div>
  );
}
