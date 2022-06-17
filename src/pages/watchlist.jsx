import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MoviesList from "../components/MoviesList";
import Form from '../components/Form';
import { ResultMovies, SearchMovies } from "../services/Movie-API";



const WatchListPage = ({prevWatchList},) => {
  const [watchedList, SetWatchedList] = useState(prevWatchList || []);
  const [movieToSearch, SetMoivesSearch] = useState([]);
  const initialWatchedMovies = JSON.parse(localStorage.getItem("watchMovieList"));
  const [watchedMovies, setWatchedMovies] = useState(
    initialWatchedMovies || []
  );

  var queryData = "";
  const handleSearch = (query) => {
    queryData = query;
    SearchMovies(query).then((movies) => SetMoivesSearch(movies.results));
  };
  
    return (
      <> 
             <Header>
          <Form ResultMovies={handleSearch} />
          
        </Header>
      <MoviesList 
      provider="watchList"
      // movies={prevWatchList}
      movies={prevWatchList}
      // toggleWatchMovie={handleToggleWatchMovie}
      watchedMovies={prevWatchList}
      />
      </>

    );
}
 
export default WatchListPage;