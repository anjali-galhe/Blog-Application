import React from "react";
import { Header as HeaderData } from "../../assets/HeaderData";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      {HeaderData.map((item) => (
        <Link to={`/category/${item.category}`} key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Header;