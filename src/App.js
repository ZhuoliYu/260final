import './App.css';
import {BrowserRouter as Router,Routes,Route} from'react-router-dom';
import MainPage from './pages/main';
import DetailPage from './pages/details';
import MyWatchListPage from './pages/watchlist';



function App() {
   
  const prevWatchList = JSON.parse(localStorage.getItem("WatchList"));


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage prevWatchList={prevWatchList} />} />

        <Route path="/my-watch-list" 
        element={<MyWatchListPage prevWatchList={prevWatchList} />} />

        <Route path ={ `/details`} element ={<DetailPage prevWatchList={prevWatchList}/>} /> 

      </Routes>
    </Router>


  );
}

export default App;
