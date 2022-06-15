import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MoviesList from '../components/MoviesList';
import {ResultMovies,SearchMovies} from '../services/Movie-API';
import Form from '../components/Form';


const MainPage = ({prevWatchList}) => {
    //create state to hold movies through useState
    const [listOfNetflix, SetNetflixList] = useState([]);
    const [listOfCrave, SetCraveList] = useState([]);
    const [listOfDisney, SetDisneyList] = useState([]);
    const [listOfApplePlus, SetApplePlusList] = useState([]);
    const [movieToSearch, SetMoivesSearch] = useState([]);
    const [watchedList, SetWatchedList] = useState(prevWatchList || []);

    //set local storage function
    const SetLocalStorage =(movie) =>{
      //check local data prevWatchlist whether has movie or not
      const prevWatchList = JSON.parse(localStorage.getItem("watchedMovies"));
      var newWatchList = [];
      if(!prevWatchList){
        //situation1,storage is empty,new storage is array only movie
        newWatchList = [movie];
      }else if(prevWatchList.findIndex((m)=>m.id===movie.id)=== -1){
        //sit 2,storage has many movies,check this movie is not in storage,add to prevwatchlist

        newWatchList = [...prevWatchList,movie];
      }else{
        newWatchList=prevWatchList.filter((m)=>m.id !== movie.id);
        //filter is picking 2 conditions.(m)is each movie in the list,if id is same,remove it.
      }
      localStorage.setItem("watchedMovies", JSON.stringify(newWatchList));
    };

    //checkedmoviepart shortcut usf
    const initialWatchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
    const [watchedMovies, setWatchedMovies] = useState(initialWatchedMovies || []);

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
  }, []);//this should be changed depends on search movie, every movie serach change, it runs

  useEffect(() => {
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));

  }, [watchedMovies]);
  
  //handle watched movie (checked)
  const handleToggleWatchMovie = (movie) => {
    // console.log("toggle movie", id);
    //add or remove the movie id to watchedMovies
    SetLocalStorage(movie);
    setWatchedMovies(JSON.parse(localStorage.getItem("WatchList")));


    //previous version red check was work
    // const handleToggleWatchMovie = id => {
    //   // console.log("toggle movie", id);
    //   //add or remove the movie id to watchedMovies
    //   setWatchedMovies(prevState =>{
    //     if( prevState.findIndex(movieId => movieId=== id)=== -1) {
    //       return [...prevState, id];// cuz push will modify state
    //     }
    //     return prevState.filter(movieId => movieId !== id);
    //   });
  };

  var queryData =""; 
  const handleSearch = (query) => {
queryData = query;
SearchMovies(query).then((movies) => SetMoivesSearch(movies.results))
  };
console.log(movieToSearch.length)
if (movieToSearch.length===0){
  return ( 
    <>
    <Header>
    <Form ResultMovies={handleSearch} />
    </Header>

    <MoviesList provider="Netflix" movies={listOfNetflix} toggleWatchMovie={handleToggleWatchMovie} 
    watchedMovies={watchedMovies}/>
    <MoviesList provider="Crave" movies={listOfCrave} watchedMovies={watchedMovies}/>
    <MoviesList provider="Disney" movies={listOfDisney} watchedMovies={watchedMovies}/>
    <MoviesList provider="Apple Plus" movies={listOfApplePlus} watchedMovies={watchedMovies}/>
    </>
 );

}else {
  return(
    <>
    <Header>
    <Form ResultMovies={handleSearch} />
    </Header>
    <MoviesList provider="results" movies={movieToSearch} 
    watchedMovies={watchedList} toggleWatchMovie={handleToggleWatchMovie}/>
    </>
  )
}
   
}
export default MainPage;
