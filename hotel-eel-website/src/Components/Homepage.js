import React from "react";
import { Overview } from "./Overview";
import { ImageData } from "./Images";
import { ImageSlider} from "./ImageSlider";
import { AccomodationTable} from "./AccomodationtType.js";

export const Homepage = () => {
  return (
    <div className="home">
      <div>
        <Overview />
        <ImageSlider slides={ImageData} />
        < AccomodationTable />
      </div>
    </div>
  );
};
