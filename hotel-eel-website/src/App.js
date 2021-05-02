import React from "react";
import "./App.css";
import { Homepage } from "./Components/Landingpage/Homepage";
import { CreateEnquiry } from "./Components/Enquiry/CreateEnquiry";
import { EditEnquiry } from "./Components/Enquiry/EditEnquiry";
import { DisplayEnquiry } from "./Components/Enquiry/DisplayEnquiry";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Links to CRUD functions - Should use buttons? */}
        <Link to="/enquiry">Enquire</Link>
        <Link to="/EditEnquiry">Update</Link>
        <Link to="/DisplayEnquiry">Display</Link>

        <Switch>
          <Route exact path="/enquiry">
            <CreateEnquiry />
          </Route>

          <Route exact path="/DisplayEnquiry">
            <DisplayEnquiry />
          </Route>

          <Route exact path="/enquiry/edit/:id">
            <EditEnquiry />{" "}
          </Route>

          {/* Link to landing page */}
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
