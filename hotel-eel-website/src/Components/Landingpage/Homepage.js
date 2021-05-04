import React from "react";
import { ImageData } from "./Images";
import { ImageSlider } from "./ImageSlider";
import { Amenities} from "./Amenities";
import { RoomTable } from "./RoomTable";
import { BoardTable } from "./BoardTable";

export const Homepage = () => {
  return (
    <>
      <div>
        <ImageSlider slides={ImageData} />
        <Amenities />
        <RoomTable />
        <BoardTable />
      </div>
      </>
  );
};
