import React from "react";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    props.logout(false);
  };

  return (
    <div className="topbanner">

      <div >
        <Link className="link" to="/">Home</Link>
      </div>

      <div >
        <Link className="link" to="/enquiry">Enquire</Link>
      </div>

      <div >
        {props.loginStatus && (
          <Link className="link" to="/login" onClick={handleLogout}>
            Logout
          </Link>
        )}
        {!props.loginStatus && <Link className="link" to="/login">Login</Link>}
      </div>

      <label>Reservation: (+254) 2 733 733 </label>
      
    </div>
  );
};
