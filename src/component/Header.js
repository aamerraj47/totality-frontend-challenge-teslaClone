import React, { useState } from "react";
import "./Style.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className="header_container">
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <div className="header_menu">
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model X</a>
        <a href="#">Model 3</a>
      </div>
      <div className="header_RightMenu">
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIcon className="menuOpen" onClick={() => setBurgerStatus(true)} />
      </div>
      <div className={burgerStatus ? "burgerNavZero" : "burgerNavFull"}>
        <div className="closeWrapper">
          {" "}
          <CloseIcon
            className="menuClose"
            onClick={() => setBurgerStatus(false)}
          />
        </div>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Trade -in </a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </div>
    </div>
  );
}

export default Header;
