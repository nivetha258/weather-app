
import Search from "./components/Search";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Graph from "./components/graph/Graph";
import Dayforecast from "./components/Dayforecast";

function Layout() {
  const data = useSelector((state) => state.weather.apiData);

  return (
    <div className="App bg-dark vh-100 overflow-scroll">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center py-5 text-white">Weather Application</h2>
          <Search />
          {data.length > 0 && (
            <div>
              <Header />
              <Graph />
              <Dayforecast />
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
}

export default Layout;
