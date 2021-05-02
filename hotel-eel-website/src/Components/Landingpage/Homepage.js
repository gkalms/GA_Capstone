import React from "react";
import { Header } from "./Header";
import { Overview } from "./Overview";
import { ImageData } from "./Images";
import { ImageSlider } from "./ImageSlider";
import { RoomTable } from "./RoomTable";
import { BoardTable } from "./BoardTable";

export const Homepage = () => {
  return (
      <div>
        <Header />
        <Overview />
        <ImageSlider slides={ImageData} />
        <RoomTable />
        <BoardTable />
      </div>
  );
};
