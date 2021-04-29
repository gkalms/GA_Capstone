import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Overview } from "./Components/Overview";
import { ImageData } from "./Components/Images";
import { ImageSlider } from "./Components/ImageSlider";
import { RoomTable} from "./Components/RoomType";
import { BoardTable} from "./Components/BoardType";
import {Enquiry} from "./Components/Enquiry";

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
