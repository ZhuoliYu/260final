import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../images/image-not-available.jpg";
import Header from "../components/Header";


const DetailPage = () => {
    const location = useLocation();//use location to locate data
    const movie = location.state.movie;
    const watched = location.state.watched;

    // const{id,title,overview,vote_average,poster_path} = movie;

  //   var previousButtonState = "";
  //   var previousButton = "";

  //   if(watched){
  //       previousButtonState = "remove-to-watchlist";
  //       previousButton = "-Remove from watchlist";
  //   } else {
  //     previousButtonState="add-to-watchlist";
  //     previousButton="+Add to watch list";

  //   }
    
  //   const [buttonState, SetButtonState] = useState(previousButtonState);
  //   const [button,SetButton] = useState(previousButton);
  //   useEffect((prevButton) => {return(prevButton=buttonState==="add-to-watchlist" ? "+Add to watch list"
  //   :"-Remove from watchlist");});
  // };[buttonState];

  // const handleClick =(event) => {
  //   ;
  // }

  return (
    <>
    <header className="header">
    <a href="/">
      <img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" 
    alt="netflix-font" border="0" /></a>
    <div id="navigation" className="navigation">
      <nav>
        <ul>
          <li><a href="/my-watch-list">Watch List</a></li>
        </ul>
      </nav>
    </div>
    <form id="search" className="search">
      <input type="search" placeholder="Search for a title..." />
      <div className="searchResults"></div>
    </form>
  </header>

  <div className="show-details">
  {/* Full size TV show posters from TMDB can be accessed with
   the base URL https://image.tmdb.org/t/p/original this tip is fun haha otherwise img is vague*/}
  <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`:image}
          alt="" />
    <div className="show-details-inner">
      <h1>{movie.name}</h1>
      <div className="description">{movie.overview}</div>

      {/* <button onClick={handleClick} className={buttonState}></button> */}
      
    </div>
  </div>
  </>
 );
};
export default DetailPage;
