import "../assets/styles/app.css";
import { Howler } from "howler";
import { useState } from "react";

function Volume() {
  const [vol, setVol] = useState(1);
  const volFixed = vol * 100;
  const volView = volFixed.toFixed(0);

  Howler.volume(vol);

  const AddVolume = () => {
    if (volView < 100) {
      setVol(vol + 0.05);
    }
  };

  const RemoveVolume = () => {
    if (volView > 0) {
      setVol(vol - 0.05);
    }
    if (volView <= 5) {
      setVol(0)
    }
  };

  document.body.onkeyup = function (e) {
    if (e.keyCode == 38 && volView < 100) {
      AddVolume();
    }
    if (e.keyCode == 40 && volView > 0) {
      RemoveVolume();
    }
  };
//if is playing return button
  return (
    <>
      <div className="volume">
        <div className="inline">
          <div className="music-playing pointer" onClick={AddVolume}>
            +
          </div>
          <div className="music-playing">{volView?.replace("-", "")}</div>
        </div>
        <div className="volume-end">
          <div className="music-playing pointer" onClick={RemoveVolume}>
            -
          </div>
        </div>
      </div>
    </>
  );
}

export default Volume;
