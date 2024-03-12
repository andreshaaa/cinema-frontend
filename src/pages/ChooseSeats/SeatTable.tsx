import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { BookSeats, Seat } from "../../types/bookseats";
import { useState } from "react";
import axios from "axios";
import "./ChooseSeats.css";

const SeatComponent = (props: any) => {
  return (
    <button
      disabled={props.isOccupied}
      style={{
        color: props.isOccupied ? "red" : "green",
        background: props.isSelected ? "gray" : undefined,
      }}
      onClick={props.onClick}
    >
      {props.number}
    </button>
  );
};

type Props = {
  seatData: BookSeats | null;
};

export const SeatTable = (props: Props) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const navigate = useNavigate();
  const mName = props.seatData?.movieName;
  const [username, setUsername] = useState<string>();
  const uuid = props.seatData?.id;
  const [visitorCount, setVisitorCount] = useState("1");

  const handleSeatClicked = (seatNo: number) => {
    if (selectedSeats.includes(seatNo)) {
      setSelectedSeats([...selectedSeats.filter((seat) => seat !== seatNo)]);
    } else if (selectedSeats.length < Number(visitorCount)) {
      setSelectedSeats([...selectedSeats, seatNo]);
    } else {
      setSelectedSeats([...selectedSeats.slice(1), seatNo]);
    }
  };

  const handleVisitorCount = (e: any) => {
    setVisitorCount(e.target.value);
    setSelectedSeats([]);
  };

  const handleBuyClick = () => {
    axios
      .post("http://localhost:8080/cinema/bookingresponse", {
        uuid,
        selectedSeats,
        username,
      })
      .then((response) => {
        console.log(response.data);
      });

    navigate("/checkout", {
      state: {
        movieName: props.seatData?.movieName,
        selectedSeats,
        movieTime: props.seatData?.startTime,
      },
    });
    const movtime = props.seatData?.startTime;
  };

  return (
    <>
    <center></center>
      <h1>{props.seatData?.movieName}</h1>

      {props.seatData?.startTime
        ? dayjs(props.seatData.startTime).format("dddd, MMMM D, H:mm")
        : ""}
      <div className="send-user">
        <div className="input-container">
          <div>
            <center>
              <table className="movieScreen">
                <center>SCREEN</center>
              </table>
            </center>
          </div>
          <label htmlFor="visitorCount">Number of seats </label>
          <select
            onChange={handleVisitorCount}
            name="visitorCount"
            id="vistorCount"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div>Enter your name for future recommendations!</div>

          <input
            placeholder="Name"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </div>
      <center>
        <table className="seatTableChoose">
          <div>
            {props.seatData?.seats.map((seat: Seat, idx: number) => (
              <SeatComponent
                className="seat"
                isSelected={selectedSeats?.includes(seat.seatNo)}
                number={seat.seatNo}
                isOccupied={seat.occupied}
                onClick={() => handleSeatClicked(seat.seatNo)}
              />
            ))}
          </div>
          <center>
            <button onClick={handleBuyClick} disabled={selectedSeats.length === 0}>Buy</button>
          </center>
        </table>
      </center>
    </>
  );
};
