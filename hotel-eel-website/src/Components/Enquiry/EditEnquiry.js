import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export const EditEnquiry = () => {
  const [edit, setEdit] = useState({
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
    const newState = { ...edit };
    newState[e.target.name] = e.target.value;
    setEdit(newState);
  };

  useEffect(() => {
    fetch(`/enquiries/${params.id}`)
      .then((response) => response.json())
      .then((data) => setEdit(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/enquiries/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    }).then((response) => {
      // route back to Homepage
      history.replace("/");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit booking enquiry</h3>
        <div className="Edit">
          <div>
            <label>
              Guest Name
              <input
                name="guest_name"
                value={edit.guest_name}
                onChange={handleChange}
              />
            </label>

            <label>
              Guest Phone
              <input
                name="guest_phone"
                value={edit.guest_phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Guest Email
              <input
                name="guest_email"
                value={edit.guest_email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Room Type
              <input
                name="room_type"
                value={edit.room_type}
                onChange={handleChange}
              />
            </label>

            <label>
              Board Type
              <input
                name="board_type"
                value={edit.board_type}
                onChange={handleChange}
              />
            </label>

            <label>
              Number of Guests
              <input
                name="number_of_guests"
                value={edit.number_of_guests}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Arrival
              <input
                name="start_date"
                value={edit.start_date}
                onChange={handleChange}
              />
            </label>

            <label>
              Departure
              <input
                name="end_date"
                value={edit.end_date}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};
