import React from "react";

export const Enquiry = () => {
  return (
    <div>
      <form>
        <h3>Booking enquiry</h3>
        <div>
          <div>
            <input type="text" name="name" placeholder="Fist Name" />
          </div>
          <div>
            <input type="text" name="name" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <input type="text" name="name" placeholder="Phone Number" />
        </div>
        <div>
          <input type="text" name="name" placeholder="Email Adress" />
        </div>
        <div>
          <select type="text" name="name" placeholder="Room Type"></select>
        </div>
        <div>
          <select type="text" name="name" placeholder="Boarding type"></select>
          <div>
            <select type="text" name="name" placeholder="Arrival"></select>
          </div>
          <div>
            <select type="text" name="name" placeholder="Departure"></select>
          </div>
        </div>
      </form>
    </div>
  );
};
