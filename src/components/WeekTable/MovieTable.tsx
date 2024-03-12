import { Link } from "react-router-dom"
import { Movie } from "../../types/movie"
import "./MovieTable.css"
import dayjs, { Dayjs } from "dayjs";


type Props = {
     movieData: Movie[]
     
    
}

export const MovieTable = ({ movieData}: Props) => {
    return <table className="movie-table">
        <thead>
            <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Language</th>
            <th>Duration</th>
            <th>Rating</th>
            <th>Genre</th>
              
            </tr>
        </thead>
        
    

        <tbody>{
            movieData.map((p:Movie, idx: number) =>
           
            <tr key={idx}>
              
              
                <td>{dayjs(p.event_time).format('dddd H:mm')}</td>
            <td><Link to={`/chooseseats/${p.id}`} className="b3">{p.movieName}</Link></td>
                <td>{p.language}</td>
                <td>{p.duration} minutes</td>
                <td>{p.movieAgeLimit}</td>
                <td>{p.genre[0]} {p.genre[1]} {p.genre[2]} {p.genre[3]} {p.genre[4]}</td>
                
                
            </tr>)
            }      
        </tbody>
    </table>



}