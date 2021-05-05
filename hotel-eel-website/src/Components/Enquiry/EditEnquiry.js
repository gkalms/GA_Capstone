import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Select } from "@material-ui/core";

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
    fetch(`/api/enquiries/${params.id}` , {
      headers: {
        'token': window.localStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((data) => setEdit(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/enquiries/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'token': window.localStorage.getItem('token')
      },
      body: JSON.stringify(edit),
    }).then((response) => {
      alert("Booking Enquiry updated!");
      history.replace("/DisplayEnquiry");
    });
  };
  return (
    <div className="Enquiry">
      <h1>Edit enquiry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Guest Name
            <input
              type="text"
              name="guest_name"
              value={edit.guest_name}
              onChange={handleChange}
            />
          </label>

          <label>
            Guest Phone
            <input
              type="text"
              name="guest_phone"
              value={edit.guest_phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Guest Email
            <input
              type="text"
              name="guest_email"
              placeholder="email@email.com"
              value={edit.guest_email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Room Type
            <Select
              name="room_type"
              value={edit.room_type}
              onChange={handleChange}
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
              value={edit.board_type}
              onChange={handleChange}
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
              type="date"
              name="start_date"
              placeholder="DD/MM/YYYY"
              value={edit.start_date}
              onChange={handleChange}
            />
          </label>

          <label>
            Departure
            <input
              type="date"
              name="end_date"
              placeholder="DD/MM/YYYY"
              value={edit.end_date}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};
