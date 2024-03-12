import { BookSeats } from "../types/bookseats";
import dayjs, { Dayjs } from "dayjs";
import { useLocation } from "react-router-dom";
import "./../App.css";
type Props = {
  seatData: BookSeats | null;
};

export const Checkout = (props: any) => {
  const { state } = useLocation();
  const { movieName, movieTime, selectedSeats } = state;
  const backToIndex = () => {
    window.location.href = "http://localhost:3000";
  };
  const seatNumbers = selectedSeats.map((seatNo: string, index: number) => (
    <li key={index}>{seatNo}</li>
  ));

  return (
    <table className="table-checkout">
      <tbody>
        <center>
          <h1>Tickets purchased!</h1>
          <h4>Your seat numbers are:</h4>
          <h3>{seatNumbers}</h3>
          <h1>{movieName}</h1>
          <h3>{dayjs(movieTime).format("dddd, MMMM D, H:mm")}</h3>
          <button onClick={backToIndex}>Start again</button>
          <div style={{ marginBottom: "10px" }}></div>
        </center>
      </tbody>
    </table>
  );
};
