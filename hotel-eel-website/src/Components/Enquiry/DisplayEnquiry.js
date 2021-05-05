import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const DisplayEnquiry = () => {
  const [enquiry, setEnquiry] = useState([]);

  useEffect(() => {
    fetch("/api/enquiries", {
      headers: {
        'token': window.localStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setEnquiry(data)
        }
      })
      .catch((error) => console.log(error))
  }, []);

  const onDeleteClicked = (id) => {
    fetch(`/api/enquiries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'token': window.localStorage.getItem('token')
      },
    }).then((response) => {
      alert("Booking Enquiry deleted!");
    });
  };
  return (
    <div className="Enquiry">
      <ul>
        {enquiry.map((el) => (
          <div>
            <li key={el.id}>
              <Link to={`/enquiry/edit/${el.id}`}>
                {el.guest_name},{el.guest_phone},{el.guest_email},{el.room_type}
                ,{el.board_type},{el.number_of_guests},{el.start_date},
                {el.end_date}
              </Link>
            </li>
            <Button variant="contained" onClick={() => onDeleteClicked(el.id)}>
              Delete
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};
