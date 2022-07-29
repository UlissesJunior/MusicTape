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
      setVol(vol + 0.05);
      console.log("a");
    }
    if (e.keyCode == 40 && volView > 0) {
      setVol(vol - 0.05);
      console.log("b");
    }
  };

  return (
    <>
      <div className="volume">
        <div className="inline">
          <div className="music-playing" onClick={() => setVol(vol + 0.05)}>+</div>
          <div className="music-playing">{volView}</div>
        </div>
        <div className="volume-end">
          <div className="music-playing" onClick={() => setVol(vol - 0.05)}>-</div>
        </div>
      </div>
    </>
  );
}

export default Volume;
