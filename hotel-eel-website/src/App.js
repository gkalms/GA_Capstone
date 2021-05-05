import React, { useState } from "react";
import "./App.css";
import {CssBaseline} from '@material-ui/core';

import { Nav } from "./Components/Landingpage/Nav";
import { Herobanner } from "./Components/Landingpage/Herobanner";

import { Homepage } from "./Components/Landingpage/Homepage";
import { CreateEnquiry } from "./Components/Enquiry/CreateEnquiry";
import { EditEnquiry } from "./Components/Enquiry/EditEnquiry";
import { DisplayEnquiry } from "./Components/Enquiry/DisplayEnquiry";

import { LoginUser } from "./Components/User/LoginUser";

import { BrowserRouter, /*Link,*/ Switch, Route } from "react-router-dom";

// When App loads the first time/refreshed
const userLoggedIn = () => {
  if (window.localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

export const App = () => {
  // Set up condition to display forms based on logged in status
  const userloggedIn = userLoggedIn();
  const [loggedIn, setLoggedIn] = useState(userloggedIn);

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Nav logout={setLoggedIn} loginStatus={loggedIn} />
        <Herobanner />

        <Switch>
          <Route exact path="/login">
            <LoginUser setLoggedIn={setLoggedIn} />
          </Route>

          <Route exact path="/enquiry">
            <CreateEnquiry />
          </Route>

          {loggedIn && (
            <Route exact path="/DisplayEnquiry">
              <DisplayEnquiry />
            </Route>
          )}

          {loggedIn && (
            <Route exact path="/enquiry/edit/:id">
              <EditEnquiry />
            </Route>
          )}

          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    <CssBaseline />
    </>
  );
};
