import "../styles/app.css";
import { Howler } from "howler";
import { useState } from "react";

function Volume() {
  const [vol, setVol] = useState(1);
  const volFixed = vol * 100;
  const volView = volFixed.toFixed(0);
  Howler.volume(vol);

  document.body.onkeyup = function (e) {
    if (e.keyCode == 38 && volView < 100) {
      console.log("Aumentando o Volume");
      setVol(vol + 0.1);
    }
    if (e.keyCode == 40 && volView > 0) {
      console.log("Abaixando o Volume");
      setVol(vol - 0.1);
    }
  };

  return (
    <>
      <div className="music-playing">{volView}</div>
    </>
  );
}

export default Volume;
