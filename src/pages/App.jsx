import "../styles/app.css";
// import "../styles/fonts/Radwave.OTF";
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
        <Link to="toplay">
          <h2>To Play</h2>
        </Link>
        <Link to="tostudy">
        <h2>To Study</h2>
        </Link>
        <Link to="torelax">
        <h2>To Relax</h2>
        </Link>
      </div>
    </div>
  );
}

export default App;
