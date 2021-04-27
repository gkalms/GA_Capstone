import React from "react";

export const Enquiry = () => {
  return (
    <div>
      <form>
        <h3>Booking enquiry</h3>
        <div className="Enquiry">
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
          <input type="text" name="name" placeholder="Room Type"/>
        </div>
        <div>
          <input type="text" name="name" placeholder="Boarding type"/>
          <div>
            <input type="text" name="name" placeholder="Arrival"/>
          </div>
          <div>
            <input type="text" name="name" placeholder="Departure"/>
          </div>
          <button type="submit">Enquire</button>
        </div>
      </form>
    </div>
  );
};
