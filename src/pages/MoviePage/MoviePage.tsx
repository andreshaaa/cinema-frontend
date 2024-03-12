import axios from "axios";
import "./MoviePage.css";
import { MovieTable } from "../../components/WeekTable/MovieTable";
import { useEffect, useRef, useState } from "react";
export const MoviePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [language, setLanguage] = useState();
  const [genre, setGenre] = useState();
  const [userName, setUserName] = useState<string>("");
  const [rating, setRating] = useState();
  const [time, setTime] = useState();
  const userNameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cinema/weeklycalendar/`, {
        params: { language, genre, userName, rating, time },
      })
      .then((response: any) => setMovieData(response.data));
  }, [language, genre, userName, rating, time]);



  return (
    <>
      <div className="header-container"></div>
      <div className="table-container">
        <center></center>
        <table>
          <tbody>
            <tr>
              <th>
                <center>
                  <h1>"Cinema APP"</h1>
                </center>
                <h3>Select your movie!</h3>
                <div>If you have been here before, enter your name for recommendations!</div>
                <input
                  ref={userNameRef}
                  name="username"
                  placeholder="Enter name"
                />
                <button
                  onClick={() => setUserName(userNameRef?.current?.value || "")}
                >
                  Go!
                  </button>
                  <button
                    onClick={() =>setUserName("null")}
                    >
                        Cancel
                  </button>
                  <div></div>
                  
                <label htmlFor="hourtime">Sort by start time: </label>
                <select
                  onChange={(e: any) => setTime(e.target.value)}
                  name="hourtime"
                  id="hourtime"
                >
                  <option value="all-movies">All</option>
                  <option value="15.00">15:00</option>
                  <option value="16.30">16:30</option>
                  <option value="18.00">18:00</option>
                  <option value="19.30">19:30</option>
                  <option value="21.00">21:00</option>
                  <option value="22.30">22:30</option>
                </select>
                <label htmlFor="rating">Sort by age rating: </label>
                <select
                  onChange={(e: any) => setRating(e.target.value)}
                  name="rating"
                  id="rating"
                >
                  <option value="all-movies">All</option>

                  <option value="U">younger than 12</option>
                  <option value="12">12 and younger</option>
                  <option value="15">15 and younger</option>
                  <option value="all-movies">18 and younger</option>
                </select>
                <label htmlFor="language">Sort by language: </label>
                <select
                  onChange={(e: any) => setLanguage(e.target.value)}
                  name="language"
                  id="language"
                >
                  <option value="all-movies">All</option>
                  <option value="Estonian">Estonian</option>
                  <option value="German">German</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
                <label htmlFor="genre">Sort by genre: </label>
                <select
                  onChange={(e: any) => setGenre(e.target.value)}
                  name="genre"
                  id="genre"
                >
                  <option value="all-movies">All</option>
                  <option value="Drama">Drama</option>
                  <option value="Musical">Musical</option>
                  <option value="Crime">Crime</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Biography">Biography</option>
                  <option value="History">History</option>
                  <option value="War">War</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Western">Western</option>
                  <option value="Action">Action</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Horror">Horror</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Romance">Romance</option>
                  <option value="Family">Family</option>
                </select>{" "}
                <MovieTable movieData={movieData}></MovieTable>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
