import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const Enquiry = () => {
  const [create, setCreate] = useState({
    guest_name: "",
    guest_phone: "",
    guest_email: "",
    room_type: "",
    board_type: "",
    number_of_guests: "",
    start_date: "",
    end_date: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const newState = { ...create };
    newState[e.target.name] = e.target.value;
    setCreate(newState);
  };

  useEffect(() => {
    fetch("/enquiries")
      .then((response) => response.json())
      .then((create) => setCreate(create));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(create),
    }).then((response) => {
      // Display List
      history.replace("/DisplayEnquiry");
    });
  };
  return (
    <div>
       <h1>Booking enquiry</h1>
       
      <form onSubmit={handleSubmit}>
        <div className="Enquiry">
          <div>
            <label>
              Guest Name
              <input type="text"
                name="guest_name"
                value={create.guest_name}
                onChange={handleChange}
              />
            </label>

            <label>
              Guest Phone
              <input type="text"
                name="guest_phone"
                value={create.guest_phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Guest Email
              <input type="text"
                name="guest_email"
                value={create.guest_email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Room Type
              <input type="text"
                name="room_type"
                value={create.room_type}
                onChange={handleChange}
              />
            </label>

            <label>
              Board Type
              <input type="text"
                name="board_type"
                value={create.board_type}
                onChange={handleChange}
              />
            </label>

            <label>
              Number of Guests
              <input type="text"
                name="number_of_guests"
                value={create.number_of_guests}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Arrival
              <input type="text"
                name="start_date"
                value={create.start_date}
                onChange={handleChange}
              />
            </label>

            <label>
              Departure
              <input type="text"
                name="end_date"
                value={create.end_date}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
