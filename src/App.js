import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <nav className="Navbar navbar">
        <h1>New York</h1>
        <form>
          <input type="search" placeholder="Enter a city"></input>
          <button className="btn btn-outline-light">Search</button>
        </form>
      </nav>
      <div className="Main">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/811/original/sun.png?1695302792"
          alt="weather-icon"
        />
        <span className="Temperature">27</span>
        <span className="Units">°C</span>
        <span className="Separator"> | </span>
        <span className="Units">°F</span>
        <p>l: | h: </p>
      </div>
      <footer className="Footer">
        <p>
          <a
            href="https://github.com/elleyjin/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Chan Ee Lin/Elley Jin
        </p>
      </footer>
    </div>
  );
}

export default App;
