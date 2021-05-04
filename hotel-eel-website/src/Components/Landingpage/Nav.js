import React from "react";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    props.logout(false);
  };

  return (
    <div className="Topbanner">

      <div className="logo">
        <Link to="/">HotelEel</Link>
      </div>

      <div className="Enquire">
        <Link to="/enquiry">Enquire</Link>
      </div>

      <div className="Login">
        {props.loginStatus && (
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        )}
        {!props.loginStatus && <Link to="/login">Login</Link>}
      </div>

      <label>Reservation: (+254) 2 733 733 </label>
      
    </div>
  );
};
