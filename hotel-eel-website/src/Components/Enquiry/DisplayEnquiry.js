import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DisplayEnquiry = () => {
  const [enquiry, setEnquiry] = useState([]);

  useEffect(() => {
    fetch("/enquiries")
      .then((response) => response.json())
      .then((data) => setEnquiry(data));
  }, []);
  return (
    <div>
      <ul>
        {enquiry.map((el) => (
          <li key={el.id}>
            <Link to={`/enquiry/edit/${el.id}`}>
              {el.guest_name},{el.guest_phone},{el.guest_email},{el.room_type},
              {el.board_type},{el.number_of_guests},{el.start_date},
              {el.end_date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
