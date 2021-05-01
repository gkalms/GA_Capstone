import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export const DeleteEnquiry = () => {
  const [remove, setDelete] = useState({
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
  const params = useParams();

  const handleChange = (e) => {
    const newState = { ...remove };
    newState[e.target.name] = e.target.value;
    setDelete(newState);
  };

  useEffect(() => {
    fetch(`/enquiries/${params.id}`)
      .then((response) => response.json())
      .then((data) => setDelete(data));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/enquiries/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(remove),
    }).then((response) => {
      // Display list
      history.replace("/Display Enquiry");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Delete booking enquiry</h1>
        <div className="Delete">
          <div>
            <label>
              Guest Name
              <input
                name="guest_name"
                value={remove.guest_name}
                onChange={handleChange}
              />
            </label>

            <label>
              Guest Phone
              <input
                name="guest_phone"
                value={remove.guest_phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Guest Email
              <input
                name="guest_email"
                value={remove.guest_email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Room Type
              <input
                name="room_type"
                value={remove.room_type}
                onChange={handleChange}
              />
            </label>

            <label>
              Board Type
              <input
                name="board_type"
                value={remove.board_type}
                onChange={handleChange}
              />
            </label>

            <label>
              Number of Guests
              <input
                name="number_of_guests"
                value={remove.number_of_guests}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Arrival
              <input
                name="start_date"
                value={remove.start_date}
                onChange={handleChange}
              />
            </label>

            <label>
              Departure
              <input
                name="end_date"
                value={remove.end_date}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Delete</button>
          </div>
        </div>
      </form>
    </div>
  );
};
