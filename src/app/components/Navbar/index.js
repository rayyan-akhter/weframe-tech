import React from "react";
import "./style.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search-icon.png";
import notification_icon from "../../assets/notification.png";
import arrow_icon from "../../assets/arrow-down.png";
import cart_icon from "../../assets/cart-icon.png";
import heart_icon from "../../assets/heart.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-first-wrapper">
        <Image src={logo} alt="logo" />
        <div className="input-container">
          <input placeholder="Rechercher un produit" />
          <Image src={search_icon} alt="serch-icon" />
        </div>
      </div>
      <div className="navbar-button-container">
        <div className="navbar-button">
          <Image src={notification_icon} alt="notification-icon" />
          Inspirations
        </div>
        <div className="navbar-button wishlist">
          <Image src={heart_icon} alt="notification-icon" />
          Mes favoris
          <div className="wishlist-number">24</div>
        </div>
        <div className="navbar-button cart">
          <Image src={cart_icon} alt="notification-icon" />
          Panier
        </div>
        <div className="navbar-button circle"></div>
        <div className="navbar-button last">
          FR
          <Image src={arrow_icon} alt="notification-icon" />
        </div>
      </div>
    </div>
  );
};
