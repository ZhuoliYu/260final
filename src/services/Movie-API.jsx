/*import API_KEY from "../api-key" not working though try add api key here*/

const API_KEY = "29f883559f6c66cbed8fb0b227b66d58";/* for geting some data from API provider, from TMDB,*/

const BASIC_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=29f883559f6c66cbed8fb0b227b66d58&language=en-US&sort_by=popularity.desc&with_watch_providers='
//with_watch_provider id Netflix (id: 8)Crave (id: 230)Disney (id: 337)Apple Plus (id: 350)  */

//search:https://api.themoviedb.org/3/search/tv?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
const SEARCH_URL=`https://api.themoviedb.org/3/search/tv?api_key=29f883559f6c66cbed8fb0b227b66d58&language=en-US&query=`

export const ResultMovies = async (providerId) => {
    const response = await fetch(`${BASIC_URL}${providerId}`);
    const Movies = await response.json();
    return Movies;
  };
  //query String required
  export const SearchMovies = async (query) => {
    const response = await fetch(`${SEARCH_URL}${query}`);
    const Movies = await response.json();
    return Movies;
  };