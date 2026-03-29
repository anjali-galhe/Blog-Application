import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { FaRegPlusSquare } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";




import "./Navbar.css";

const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        <FaBlog className="logo-icon" />
        <h2>BlogZen</h2>
      </div>


      <div className="search">
        
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        )}

        <PiMagnifyingGlassLight
          className="search-icon"
          onClick={() => setShowSearch(!showSearch)}
        />
      <div className="add">
<Link to="/add"><FaRegPlusSquare /></Link>

      </div>


      </div>

      <nav className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/categories">CATEGORIES</Link>
        <Link to="/joinus">JOIN US</Link>
        <Link to='/blogs'>BLOGs</Link>

        <Link to='/profile' className="profile"><VscAccount /></Link>

        
      </nav>

    </header>
  );
};

export default Navbar;