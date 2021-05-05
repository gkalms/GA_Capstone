import React from "react";
import { ImageData } from "./Images";
import { ImageSlider } from "./ImageSlider";
import { RoomBoard } from "./RoomBoard";

export const Homepage = () => {
  return (
    <>
      <div>
        <ImageSlider slides={ImageData} />
        <RoomBoard />
      </div>
      </>
  );
};
