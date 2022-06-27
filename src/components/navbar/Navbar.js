import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt">About Us</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggle
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggle(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />}
        {toggle && (
        <div className="gpt__navbar-menu_container">
          <div className="gpt__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt">About Us</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;