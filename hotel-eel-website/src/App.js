import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Overview } from "./Components/Overview";
import { ImageData } from "./Components/Images";
import { ImageSlider } from "./Components/ImageSlider";
import { RoomTable} from "./Components/RoomTable";
import { BoardTable} from "./Components/BoardTable";
import {Enquiry} from "./Components/Enquiry/Enquiry";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Overview />
      <ImageSlider slides={ImageData} />
      <RoomTable />
      <BoardTable />
      <Enquiry />
    </div>
  );
};

export { App };
