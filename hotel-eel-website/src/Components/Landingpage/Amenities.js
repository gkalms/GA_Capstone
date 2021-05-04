import React from "react";

export const Amenities = () => {
  return (
    <div className="amenities_container">
        <h2>Amenities</h2>
      <div className="amenities">
        <h3>Hotel Amenities</h3>
        <ul>
          <li>Wifi</li>
          <li>Dining facilities</li>
          <li>Laundry Service</li>
          <li>Secure parking</li>
        </ul>
      </div>
      <div className="amenities">
        <h3>Room Amenities</h3>
        <ul>
          <li>Complimentary tea/coffee</li>
          <li>Electronic Safe</li>
          <li>Netflix</li>
          <li>Room service</li>
        </ul>
      </div>
    </div>
  );
};
