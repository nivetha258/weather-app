import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WeatherAPI from "./Components/WeatherAPI";
import Search from "./Components/Search";
import Header from "./Components/Header";
import { useSelector } from "react-redux";

function App() {
const data = useSelector((state)=>state.weather.apiData)

  return (
    
    <div className="App bg-dark text-white vh-100">
      <div className="row justify-content-center">
        <div className="col-8">
        <h2 className="text-center py-5">Weather Application</h2>
          <Search />
         { data.length > 0 &&<div>
          <Header/>
          
          </div>}

        </div>
      </div>
         <WeatherAPI/>
    </div>
  );
}

export default App;
