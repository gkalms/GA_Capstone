import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div className="Topbanner">
      <div className="logo">
        <Link to="/">HotelEel
        </Link>
      </div>
      <div className="Enquire">
      <Link to="/enquiry">Enquire</Link>
      </div>
      <div className="Login">
      <Link to="/login">Login</Link>
      </div>
      <div className="Contact">Contact Us</div>
    </div>
  );
};
