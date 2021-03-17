import Navbar from "./Components/Navbar";
import Middle from "./Components/Middle";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Gallery from "./Components/Gallery";
import './App.css';

function App() {
  return (
    <div className = "container background">
    <div className="App">
      <Navbar />
      <Middle />
      <Third />
      <Fourth />
      <Gallery />
    </div>
    </div>
  );
}

export default App;
