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
      <div className="Register">
      <Link to="/register">Register</Link>
      </div>
      <div className="Login">
      <Link to="/login">Login</Link>
      </div>
      <label>Reservation: (+254) 2 733 733 </label> 
    </div>
  );
};
