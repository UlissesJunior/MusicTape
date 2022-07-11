import "./styles/app.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container-max">
      <div>
        <h1>
          Music <br /> <span>Tape</span>
        </h1>
      </div>
      <div className="right">
        <Link to="/play">
          <h2>To Play</h2>
        </Link>
        <h2>To Study</h2>
        <h2>To Relax</h2>
      </div>
    </div>
  );
}

export default App;
