import "../styles/app.css";
import { Link } from "react-router-dom";

function Back() {
  return (
    <>
      <Link to ="/">
      <div className="arrow"></div>
      </Link>
    </>
  );
}

export default Back;
