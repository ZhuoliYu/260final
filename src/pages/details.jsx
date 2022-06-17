import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../images/image-not-available.jpg";
import Header from "../components/Header";
import Form from "../components/Form";

const DetailPage = ({addRemoveMovies}) => {
    const location = useLocation();//use location to locate data
    const movie = location.state.movie;
    const watched = location.state.watched;
    const{id,title,overview,vote_average,poster_path} = movie;

    //local storage
    const SetLocalStorage =(movie) =>{
      //check local data prevWatchlist whether has movie or not
      const prevWatchList = JSON.parse(localStorage.getItem("watchMovieList"));
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
      localStorage.setItem("watchMovieList", JSON.stringify(newWatchList));
    };

    // const{id,title,overview,vote_average,poster_path} = movie;

    var addRemoveMoviesButtonState = "";
    var addRemoveMoviesButton = "";

    if(watched){
        addRemoveMoviesButtonState = "remove-to-watchlist";
        addRemoveMoviesButton = "-Remove from watchlist";
    } else {
      addRemoveMoviesButtonState="add-to-watchlist";
      addRemoveMoviesButton="+Add to watch list";

    }
    
    const [buttonState, SetButtonState] = useState(addRemoveMoviesButtonState);
    const [button,SetButton] = useState(addRemoveMoviesButton);
    useEffect(()=>{
    SetButton((prevButton) => {return(prevButton=buttonState==="add-to-watchlist" ? "+Add to watch list"
    :"-Remove from watchlist");
  });
},[buttonState]);

  const handleClick = (event) => {
    SetLocalStorage(movie);
    SetButtonState((prevButtonStage) => {
      return(prevButtonStage= prevButtonStage==="add-to-watchlist"?
      "remove-to-watchlist":"add-to-watchlist");

    });
  };

//   useEffect(() => {
//     localStorage.setItem('watchList', JSON.stringify(watchList))
// }, [watchList])

  return (
    <>
        <Header>
    <Form />
    </Header>


  <div className="show-details">
  {/* Full size TV show posters from TMDB can be accessed with
   the base URL https://image.tmdb.org/t/p/original this tip is fun haha otherwise img is vague*/}
  <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`:image}
          alt="" />
    <div className="show-details-inner">
      <h1>{movie.name}</h1>
      <div className="description">{movie.overview}</div>

      <button onClick={handleClick} className={[addRemoveMoviesButtonState]}>
        {button}
      </button>
    </div>
  </div>
  </>
 );
}; 
export default DetailPage;
