import './App.css';
import {BrowserRouter as Router,Routes,Route} from'react-router-dom';
import MainPage from './pages/main';
import DetailPage from './pages/details';
import watchList from './pages/watchlist';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/my-watch-list" element={<MyWatchList />} /> */}
        <Route path ={ `/details`} element ={<DetailPage />} /> 

      </Routes>
    </Router>


  );
}

export default App;
