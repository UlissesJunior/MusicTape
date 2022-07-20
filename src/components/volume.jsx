import "../styles/app.css";
import { Howler } from "howler";
import { useState } from "react";


function Volume() {
  const [vol, setVol] = useState(1)
  const volFixed = vol*100;
  Howler.volume(vol);

   document.body.onkeyup = function (e) {
    if (e.keyCode == 38) {
      console.log("Aumentando o Volume");
      setVol(vol + 0.1)
    }
    if (e.keyCode == 40) {
      console.log("Abaixando o Volume");
      setVol(vol - 0.1)
    }
  };

  return (
    <>
      <div onClick={() => setVol(vol + 0.1)} className="music-playing">{volFixed.toFixed(0)}</div>
    </>
  );
}

export default Volume;
