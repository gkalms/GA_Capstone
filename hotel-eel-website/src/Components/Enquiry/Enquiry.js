import React from "react";
import { useEffect, useState } from "react";

export const Enquiry = () => {

  const [create, setCreate] = useState({
    guest_name: "",
      guest_phone:"",
      guest_email: "",
      room_type: "",
      board_type: "",
      number_of_guests: "",
      start_date: "",
      end_date: ""
  });

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
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Booking enquiry</h3>
        <div className="Enquiry">
          <div>
          <label>Guest Name
            <input 
            name="guest_name" 
            value={create.guest_name}
            onChange={handleChange}/>
            </label>

            <label>
              Guest Phone
              <input 
            name="guest_phone" 
            value={create.guest_phone}
            onChange={handleChange}/>
            </label>
          
          <label>
            Guest Email
            <input 
            name="guest_email" 
            value={create.guest_email}
            onChange={handleChange}/>
            </label>
            </div>
            <div>
          <label>
            Room Type
            <input 
            name="room_type" 
            value={create.room_type}
            onChange={handleChange}/>
            </label>
       
          
          <label>
            Board Type
            <input 
            name="board_type" 
            value={create.board_type}
            onChange={handleChange}/>
            </label>
          
          <label>
            Number of Guests
            <input 
            name="number_of_guests" 
            value={create.number_of_guests}
            onChange={handleChange}/>
            </label>
            </div>
            <div>
          <label>
            Arrival
            <input 
            name="start_date" 
            value={create.start_date}
            onChange={handleChange}/>
            </label>
            
            <label>
              Departure
              <input 
            name="end_date" 
            value={create.end_date}
            onChange={handleChange}/>
              </label>
           

          <button type="submit">Submit</button>
          </div>
        </div>

      </form>
      
    </div>
  );
};
