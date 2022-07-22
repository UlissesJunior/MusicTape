import { useState } from "react";
import "../styles/app.css";
import Playing from "./music-playing";

function Button({ sound }) {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  if (active === false) {
    return (
      <>
        <Playing active={active}/>
        <div className="play-button" onClick={ToggleMode}>
          <div onClick={() => sound.play()} className="play"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <Playing active={active}/>
      <div className="pause-button" onClick={ToggleMode}>
        <div onClick={() => sound.pause()} className="pause"></div>
      </div>
    </>
  );
}

function Play({ sound }) {
  
  // document.body.onkeyup = function (e) {
  //   if (e.keyCode == 32 || e.keyCode == 13) {
      
  //   }
  // }
  return (
    <>
      <div className="row">
        <Button sound={sound} />
      </div>
    </>
  );
}

export default Play;
