import React from "react";
import { Amenities } from "./Amenities";
import { ImageData } from "./Images";
import { ImageSlider } from "./ImageSlider";
import { RoomBoard } from "./RoomBoard";

export const Homepage = () => {
  return (
      <div>
        <ImageSlider slides={ImageData} />
        <Amenities />
        <RoomBoard />
      </div>
  );
};
