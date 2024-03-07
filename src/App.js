import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./Layout";
import WeatherAPI from "./components/WeatherAPI";

function App() {
  return <>
      <Layout/>
      <WeatherAPI />
  </>;
}

export default App;
