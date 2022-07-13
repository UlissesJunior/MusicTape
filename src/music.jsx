import "./styles/app.css";
import Pet from "./components/tape";
import Play from "./components/play";
import Back from "./components/back";
import { useParams } from "react-router-dom";

function Music() {
  
  const params  = useParams();

  return (
    <div id={params.id}>
      <div className="container">
        <div className="start">
          <Back />
        </div>
        <div className="center_high">
          <Pet />
          <div className="end">
            <Play />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
