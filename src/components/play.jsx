import { useState } from "react";
import "../styles/app.css";

function Menu({ sound }) {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  if (active === false) {
    return (
      <>
        <div className="inline">
          <div className="playing">
            <div className="playing-1"></div>
            <div className="playing-2"></div>
            <div className="playing-1"></div>
          </div>
          <div className="music-playing">
            League of Legendes - Take Over
            <div className="album">Take Over</div>
          </div>
        </div>
        <div className="play-button" onClick={ToggleMode}>
          <div onClick={() => sound.play()} className="play"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="inline">
        <div className="playing">
          <div className="playing-1 animate-1"></div>
          <div className="playing-2 animate-2"></div>
          <div className="playing-1 animate-1"></div>
        </div>
        <div className="music-playing">
          League of Legendes - Take Over
          <div className="album">Take Over</div>
        </div>
      </div>
      <div className="pause-button" onClick={ToggleMode}>
        <div onClick={() => sound.pause()} className="pause"></div>
      </div>
    </>
  );
}

function Play({ sound }) {
  return (
    <>
      <div className="row">
        <Menu sound={sound} />
      </div>
    </>
  );
}

export default Play;
