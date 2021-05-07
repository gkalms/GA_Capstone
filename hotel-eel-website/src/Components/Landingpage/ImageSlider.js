import React, { useState } from "react";
import { ImageData } from "./Images";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const ImageSlider = ({ slides }) => {
  const [image, setImage] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setImage(image === length - 1 ? 0 : image + 1);
  };

  const prevSlide = () => {
    setImage(image === 0 ? length - 1 : image - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      
      {ImageData.map((slide, index) => {
        return (
          <div 
          className={index === image ? "slide active" : "slide"} 
          key={index}>
            {index === image && ( <img src={slide.image} 
            alt="Hotel Eel Accomodation" className="images" />)}
          </div>
        );
      })}
    </section>
  );
};
