import React, { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsDiscord,
  BsLinkedin,
  BsSearch,
  BsCartFill,
} from "react-icons/bs";
import { FaTimes, FaBars, FaUserAlt } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="nav">
        <div className="left">
          <h1>FURNITURE</h1>
        </div>
        <div className="center">
          <ul className="list">
            <li className="nav_item">HOME</li>
            <li className="nav_item">PRODUCT</li>
            <li className="nav_item">CONTACT</li>
            <li className="nav_item">ABOUT</li>
          </ul>
        </div>
        <div className="right">
          <input type="text" name="" id="" className="searchbar" />
          <BsSearch className="top_icons" />
          <BsCartFill className="top_icons" />
          <FaUserAlt className="top_icons" />
        </div>

        <button
          className="hambutton"
          onClick={() => {
            setShow(!show);
          }}
        >
          <FaBars />
        </button>

        {show ? (
          <div>
            <ul className="barlist">
              <li className="nav_item">HOME</li>
              <li className="nav_item">CONTACT</li>
              <li className="nav_item">WRITE</li>
              <li className="nav_item">LOGOUT</li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
