import React from 'react'
import car from "../../images/bmw.png" 
import {Link} from 'react-router-dom'
import "./home.css"


const ProductCard=({product})=> {
  const options = {
    edit:false,
    color:"white",
    activeColor:"orange",
    value:product.ratings,
    precision: 0.5,
  };
  return (
    <Link className="productCard">
      <img src={car} alt="BMW" />
      <p>BMW</p>
      <div>
        <span>(5 Reviews)</span>
      </div>
      <span >Rs.5000/day</span>
    </Link>
  )
}

export default ProductCard;