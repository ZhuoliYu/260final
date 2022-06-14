import Movie from "../components/Movie";
const MoviesList = ({provider,movies,toggleWatchMovie,watchedMovies}) => {

    return ( 
        <div className="titleList">
        <div className="title">
          <h1>{provider}</h1>
          <div className="titles-wrapper">
          {
            movies.map((movie)=>(
              <Movie key={movie.id} movie={movie} 
              toggleWatchMovie={toggleWatchMovie}
              watched={watchedMovies.findIndex(
                watchedMovieId => movie.id === watchedMovieId
                ) === -1 
                ? false
                : true
                }
              />
              
            ))}
          </div>
        </div>
      </div>
     );
}
 
export default MoviesList;