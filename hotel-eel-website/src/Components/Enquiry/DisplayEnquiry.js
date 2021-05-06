import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DisplayEnquiry = () => {
  const [enquiry, setEnquiry] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch("/api/enquiries", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setEnquiry(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const onDeleteClicked = (id) => {
    fetch(`/api/enquiries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
      body: JSON.stringify(enquiry),
    }).then((response) => {
      alert("Booking Enquiry deleted!");
      setIsDeleted(true);
    });
  };

  useEffect(() => {
    fetch("/api/enquiries", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setEnquiry(data);
        }
        setIsDeleted(false);
      })
      .catch((error) => console.log(error));
  }, [isDeleted]);

  return (
    <div className="displaytable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Roam</th>
            <th>Board</th>
            <th>Numbers</th>
            <th>Arrival</th>
            <th>Departure</th>
          </tr>
        </thead>

        <tbody>
          {enquiry.map((el) => (
            <tr key={el.id}>
              <td>{el.guest_name}</td>
              <td>{el.guest_phone}</td>
              <td>{el.guest_email}</td>
              <td>{el.room_type}</td>
              <td>{el.board_type}</td>
              <td>{el.number_of_guests}</td>
              <td>{el.start_date}</td>
              <td>{el.end_date}</td>
              <td>
                <Link to={`/enquiry/edit/${el.id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => onDeleteClicked(el.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
