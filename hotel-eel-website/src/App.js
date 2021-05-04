import React,{useState} from "react";
import "./App.css";


import { Header } from "./Components/Landingpage/Header";
import { Overview } from "./Components/Landingpage/Overview";

import { Homepage } from "./Components/Landingpage/Homepage";
import { CreateEnquiry } from "./Components/Enquiry/CreateEnquiry";
import { EditEnquiry } from "./Components/Enquiry/EditEnquiry";
import { DisplayEnquiry } from "./Components/Enquiry/DisplayEnquiry";
import { LoginUser } from './Components/User/LoginUser';
import { BrowserRouter, /*Link,*/ Switch, Route } from "react-router-dom";
import UserRegister from "./Components/User/UserRegister";

const userLoggedIn = () => {
  if (window.localStorage.getItem('token')){
    return true 
  }
  else {
    return false
  }
}

export const App = () => {
const userloggedIn = userLoggedIn()
  const [loggedIn, setLoggedIn] = useState(userloggedIn);

  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Overview />

        <Switch>
        <Route exact path="/login">
            <LoginUser setLoggedIn={setLoggedIn}/>
          </Route>

          <Route exact path="/register">
            <UserRegister />
          </Route>

          <Route exact path="/enquiry">
            <CreateEnquiry />
          </Route>

          <Route exact path="/DisplayEnquiry">
            <DisplayEnquiry />
          </Route>

        {loggedIn && <Route exact path="/enquiry/edit/:id">
          <EditEnquiry />
        </Route>}

          {/* Link to landing page */}
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
