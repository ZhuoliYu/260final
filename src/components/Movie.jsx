import image from "../images/image-not-available.jpg";
const Movie = ({movie}) => {
    return ( 
        <div className="movie">
        <a href="/details/60735">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`:image}
          alt="Movie poster" />
          <div className="overlay">
            <div className="title">{movie.name}</div>
            <div className="rating">{movie.vote_average}/10</div>
            <div className="plot">{movie.overview}</div>
          </div></a
        >
        <div data-toggled="false" className="listToggle">
          <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
        </div>
      </div>
     );
}
 
export default Movie;