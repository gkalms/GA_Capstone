import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {Homepage} from "./Components/Landingpage/Homepage"
import { Enquiry } from "./Components/Enquiry/Enquiry";
import { EditEnquiry } from "./Components/Enquiry/EditEnquiry";
import { DeleteEnquiry } from "./Components/Enquiry/DeleteEnquiry";
import { DisplayEnquiry} from "./Components/Enquiry/DisplayEnquiry";

export const App = () => {
  return (
    <Router>
      <div>
      {/* Link to landing page */}
        {/* Links to CRUD functions - Should use buttons? */}
        <Link to="/enquiry">Enquiry</Link>
        <Link to="/EditEnquiry">Edit</Link>
        <Link to="/DeleteEnquiry">Delete</Link>
        <Link to="/DisplayEnquiry">List</Link>
        
        <Switch>
        <Route exact path="/enquiry">
            <Enquiry />
          </Route>

          <Route exact path="/DisplayEnquiry">
            <DisplayEnquiry />
          </Route>

          <Route exact path="/enquiry/edit/:id">
            <EditEnquiry />
          </Route>

          <Route exact path="/enquiry/delete/:id">
            <DeleteEnquiry />
          </Route>


          <Route exact path="/">
        <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
