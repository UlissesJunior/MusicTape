import "../assets/styles/app.css";
import { Link } from "react-router-dom";

function Back({ sound }) {
  return (
    <>
      <Link to ="/">
      <div onClick={() => sound.stop()} className="arrow"></div>
      </Link>
    </>
  );
}

export default Back;
