
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  
  return (
    <div className="App bg-dark text-white vh-100" >

          <h2 className="text-center py-5">Weather Application</h2>         
          <Search/>
          <div>
            <Header/>
            
          </div>

    </div>
  );
}

export default App;
