import Movie from "../components/Movie";
const MoviesList = ({provider,movies}) => {
    return ( 
        <div className="titleList">
        <div className="title">
          <h1>{provider}</h1>
          <div className="titles-wrapper">
          {
            movies.map((movie)=>(
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
     );
}
 
export default MoviesList;