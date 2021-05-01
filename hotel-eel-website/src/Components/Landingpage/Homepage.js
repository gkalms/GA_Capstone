import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Overview } from "./Overview";
import { ImageData } from "./Images";
import { ImageSlider } from "./ImageSlider";
import { RoomTable } from "./RoomTable";
import { BoardTable } from "./BoardTable";
import { EnquiryHomepage} from "../Enquiry/EnquiryHomepage";

export const Homepage = () => {
  return (
    <Router>
      <div>
        <Header />
        <Overview />
        <ImageSlider slides={ImageData} />
        <RoomTable />
        <BoardTable />
        <Link to="EnquiryHomepage">Enquiry</Link>
        <Switch>
          <Route path="/EnquiryHomepage">
            <EnquiryHomepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
