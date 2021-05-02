import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// Page sections
// import { Header } from "./Components/Landingpage/Header";
// import { Overview } from "./Components/Landingpage/Overview";
// import { ImageData } from "./Components/Landingpage/Images";
// import { ImageSlider } from "./Components/Landingpage/ImageSlider";
// import { RoomTable } from "./Components/Landingpage/RoomTable";
// import { BoardTable } from "./Components/Landingpage/BoardTable";
import { Homepage } from "./Components/Landingpage/Homepage";

import { Enquiry } from "./Components/Enquiry/Enquiry";
import { EditEnquiry } from "./Components/Enquiry/EditEnquiry";
import { DeleteEnquiry } from "./Components/Enquiry/DeleteEnquiry";
import { DisplayEnquiry } from "./Components/Enquiry/DisplayEnquiry";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* Links to CRUD functions - Should use buttons? */}
        <Link to="/enquiry">Enquiry</Link>
        <Link to="/EditEnquiry">Edit</Link>
        <Link to="/DeleteEnquiry">Delete</Link>
        <Link to="/DisplayEnquiry">List</Link>

        {/* <Header />
        <Overview />
        <ImageSlider slides={ImageData} />
        <RoomTable />
        <BoardTable /> */}

        <Switch>
          <Route exact path="/enquiry"><Enquiry /></Route>

          <Route exact path="/DisplayEnquiry"><DisplayEnquiry /></Route>
            
          <Route exact path="/enquiry/edit/:id"><EditEnquiry /> </Route>
            
          <Route exact path="/enquiry/delete/:id"><DeleteEnquiry /></Route>
          
          {/* Link to landing page */}
          <Route exact path="/"><Homepage /></Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
};
