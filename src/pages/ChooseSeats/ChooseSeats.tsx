import axios from "axios";
import "./ChooseSeats.css";
import { SeatTable } from "./SeatTable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookSeats } from "../../types/bookseats";

export const ChooseSeats = () => {
  const params = useParams();
  const [seatData, setSeatData] = useState<BookSeats | null>(null);
  const backToIndex = () => {
    window.location.href = "http://localhost:3000";
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cinema/bookseats/${params.id}`)
      .then((response) => setSeatData(response.data));
    
  }, []);

  return (
    <>
      <div className="header-container">
        <center>
              <h1></h1>
        </center>
      </div>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>
                <h3>Pick your seat!</h3>
                <button onClick={backToIndex}>Start again</button>

                <SeatTable seatData={seatData}></SeatTable>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
