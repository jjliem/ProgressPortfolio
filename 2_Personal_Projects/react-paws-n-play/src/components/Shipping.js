import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Shipping(props) {
  return (
    
    <div className="shipping">

      
      <div className="shipping-centered">
        <a href="#home" >Free shipping for standard orders over $50</a>
      </div>

      
      <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
      <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href="#"><FontAwesomeIcon icon={['fab', 'pinterest']} /></a>
      <a href="#"><FontAwesomeIcon icon={['fab', 'google']} /></a>
      <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>

      
      <div className="shipping-right">
        <a href="#">petlover@pawsnplay.com</a>
        <a href="#">USD</a>
      </div>

    </div>
  );
}
