import WatchListCom from "../components/WatchListCom";
import { useState, useEffect } from 'react';


const WatchListPage = ({prevWatchList}) => {
  const [watchedList, SetWatchedList] = useState(prevWatchList || []);
  
    return ( 

      <WatchListCom 
      // provider="results"
      // movies={movieToSearch}
      // watchedMovies={watchedMovies}
      // toggleWatchMovie={handleToggleWatchMovie}
      />

    );
}
 
export default WatchListPage;