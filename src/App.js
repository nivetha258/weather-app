import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WeatherAPI from "./Components/WeatherAPI";
import Search from "./Components/Search";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import Graph from "./Components/Graph/Graph";
import Dayforecast from "./Components/Dayforecast";

function App() {
const data = useSelector((state)=>state.weather.apiData)

  return (
    
    <div className="App bg-dark vh-100 overflow-scroll">
      <div className="row justify-content-center">
        <div className="col-lg-8">
        <h2 className="text-center py-5 text-white">Weather Application</h2>
          <Search />
         { data.length > 0 &&<div>
          <Header/>
          <Graph/>
          <Dayforecast/>
          </div>}

        </div>
      </div>
         <WeatherAPI/>
    </div>
  );
}

export default App;
