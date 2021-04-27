import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Overview } from "./Components/Overview";
import { ImageData } from "./Components/Images";
import { ImageSlider } from "./Components/ImageSlider";
import { AccomodationTable } from "./Components/AccomodationtType.js";
import {Enquiry} from "./Components/Enquiry";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Overview />
      <ImageSlider slides={ImageData} />
      <AccomodationTable />
      <Enquiry />
    </div>
  );
};

export { App };
