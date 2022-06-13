import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MoviesList from '../components/MoviesList';
import {ResultMovies,SearchMovies} from '../services/Movie-API';
import Form from '../components/Form';


const MainPage = () => {
    //create state to hold movies through useState
    const [listOfNetflix, SetNetflixList] = useState([]);
    const [listOfCrave, SetCraveList] = useState([]);
    const [listOfDisney, SetDisneyList] = useState([]);
    const [listOfApplePlus, SetApplePlusList] = useState([]);
    const [moviesSearch, SetMoivesSearch] = useState([]);

    // create useEffect populates(fills) movies from API
    useEffect(()=>{
    /*with_watch_provider id Netflix (id: 8)Crave (id: 230)Disney (id: 337)Apple Plus (id: 350)  */
    Promise.all([
    ResultMovies(8).then((movies) => SetNetflixList(movies.results)),
    ResultMovies(230).then((movies) => SetCraveList(movies.results)),
    ResultMovies(337).then((movies) => SetDisneyList(movies.results)),
    ResultMovies(350).then((movies) => SetApplePlusList(movies.results)),
    ]);  /*https://www.javascripttutorial.net/es6/javascript-promise-all/  
    4 functions, when call multiple API, to prevent one of them got error, 
    after finishing all items then return*/
  }, []);

  const handleSearch = (query) => {

    SearchMovies(query).then((movies) => SetMoivesSearch(movies.results))
  };

if (moviesSearch === null){
  return ( 
    <>
    <Header>
    <Form ResultMovies={handleSearch} />
    </Header>

    <MoviesList provider="Netflix" movies={listOfNetflix}/>
    <MoviesList provider="Crave" movies={listOfCrave}/>
    <MoviesList provider="Disney" movies={listOfDisney}/>
    <MoviesList provider="Apple Plus" movies={listOfApplePlus}/>
    </>
 );

}else {
  return(
    <>
    <Header>
    <Form ResultMovies={handleSearch} />
    </Header>
    <MoviesList provider="results" movies={moviesSearch}/>
    </>
  )
}
   
}
export default MainPage;
