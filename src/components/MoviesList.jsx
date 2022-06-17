import Movie from "./Movie";

const MoviesList = ({provider,movies,toggleWatchMovie,watchedMovies}) => {
// console.log(watchedMovies)
    return ( 
        <div className="titleList">
        <div className="title">
          <h1>{provider}</h1>
          <div className="titles-wrapper">
          {
            movies.map((movie)=>(
              <Movie key={movie.id} movie={movie} 
              toggleWatchMovie={toggleWatchMovie}
              watched={watchedMovies.findIndex( //
                watchedMovie=> movie.id === watchedMovie.id
                ) === -1 
                ? false
                : true
                //watched movie flase or true
                }
              />
              
            ))}
          </div>
        </div>
      </div>
     );
}
 
export default MoviesList;