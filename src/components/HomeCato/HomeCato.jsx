import React from 'react'
import './HomeCato.css'
import { FaLaptop, FaPlane, FaUtensils, FaCamera } from "react-icons/fa";

const HomeCato = () => {
    const categories = [
    { name: "Technology", icon: <FaLaptop /> },
    { name: "Travel", icon: <FaPlane /> },
    { name: "Food", icon: <FaUtensils /> },
    { name: "Photography", icon: <FaCamera /> },
  ];
  return (
    <div className='homeCato-section'>
      {categories.map((cat,index)=>(
        <div key={index} className="category-card">
            <div className="icon">{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
      ))}
    </div>
  )
}

export default HomeCato
