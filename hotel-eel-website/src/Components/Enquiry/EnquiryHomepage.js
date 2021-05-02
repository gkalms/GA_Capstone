import React from "react";


import { Header } from "../Landingpage/Header";
import { Overview } from "../Landingpage/Overview";
import { Enquiry } from "./Enquiry";
import { EditEnquiry } from "./EditEnquiry";
import { DisplayEnquiry } from "./DisplayEnquiry";
import { DeleteEnquiry } from "./DeleteEnquiry";

export const EnquiryHomepage = () => {
  return (
    <div className="enquiryhomepage">
      <Header />
      <Overview />
      <Enquiry />
      <DisplayEnquiry />
      <EditEnquiry />
      <DeleteEnquiry />
    </div>
  );
};
