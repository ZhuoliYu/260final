import Movie from "../components/Movie";
import image from "../images/image-not-available.jpg";
import {Link} from "react-router-dom";

const WatchListCom = ({movie,toggleWatchMovie,watched}) => {

  const{id,title,overview,vote_average,poster_path} = movie;
  
  const handleClick = (event) => {
    // console.log(event.target);
    // console.log(id);
    toggleWatchMovie(movie);

  }
// console.log(watched)
    return ( 
        <div className="movie">
          {/* set details page in a link, to is target url, state refers to data*/}
          <Link to={`/my-watch-list?${movie.id}`} state={{movie,watched}}>
            {/* movie is data, watched is checked button   */}
        
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`:image}
          alt="Movie poster" />
          <div className="overlay">
            <div className="title">{movie.name}</div>
            <div className="rating">{movie.vote_average}/10</div>
            <div className="plot">{movie.overview}</div>
          </div>
        
        </Link>
        
        <div data-toggled={watched} className="listToggle">
          <div onClick={handleClick}>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i></div>
            {/* <i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i> */}
        </div>
      </div>
     );
}
 
export default WatchListCom;