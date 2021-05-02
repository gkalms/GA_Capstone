import { useEffect, useState } from "react";
import { Link, /*useHistory*/ } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const DisplayEnquiry = () => {
  // const history = useHistory();
  const [enquiry, setEnquiry] = useState([]);

  useEffect(() => {
    fetch("/enquiries")
      .then((response) => response.json())
      .then((data) => setEnquiry(data));
  }, []);

  const onDeleteClicked = (id) => {
    fetch(`/enquiries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      alert("Booking Enquiry deleted!");
    });
  };
  return (
    <div>
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
