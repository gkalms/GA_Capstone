import React from "react";
import { useEffect, useState } from "react";
import { Select } from "@material-ui/core";

export const CreateEnquiry = () => {
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

  const handleChange = (e) => {
    const newState = { ...create };
    newState[e.target.name] = e.target.value;
    setCreate(newState);
  };

  useEffect(() => {
    fetch("api/enquiries", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((create) => setCreate(create));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(create),
    }).then((response) => {
      e.target.reset();
      alert("Booking Enquiry created!");
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Booking enquiry</h1>
        <label classname="label">
          Guest Name
          <input
            type="text"
            name="guest_name"
            value={create.guest_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guest Phone
          <input
            type="text"
            inputMode="numeric"
            maxlength="12"
            name="guest_phone"
            value={create.guest_phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guest Email
          <input
            type="text"
            name="guest_email"
            placeholder="email@email.com"
            value={create.guest_email}
            onChange={handleChange}
          />
        </label>
        <label>
          Room Type
          <Select
            name="room_type"
            value={create.room_type}
            onChange={handleChange}
            required
          >
            <option value={"Standard"}>Standard</option>
            <option value={"Suite"}>Suite</option>
            <option value={"Cottage"}>Cottage</option>
          </Select>
        </label>
        <label>
          Board Type
          <Select
            name="board_type"
            value={create.board_type}
            onChange={handleChange}
            required
          >
            <option value={""}>None</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Half-Board"}>Half-Board</option>
            <option value={"Full-Board"}>Full-Board</option>
          </Select>
        </label>
        <label>
          Number of Guests
          <input
            type="number"
            pattern="[0-9]"
            inputmode="numeric"
            max="9"
            min="1"
            name="number_of_guests"
            value={create.number_of_guests}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Arrival
          <input
            type="date"
            name="start_date"
            placeholder="DD/MM/YYYY"
            value={create.start_date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Departure
          <input
            type="date"
            name="end_date"
            placeholder="DD/MM/YYYY"
            value={create.end_date}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
