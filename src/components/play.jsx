import { useState } from "react";
import "../styles/app.css";
import Playing from "./music-playing";
import ButtonPlay from "./btn_play";

function Button({ sound }) {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  if (active === false) {
    return (
      <>
        <Playing active={active} />
        <ButtonPlay
          ToggleMode={ToggleMode}
          className="play-button"
          classNameIcon="play"
          soundFunc={() => sound.play()}
        />
      </>
    );
  }
  return (
    <>
      <Playing active={active} />
      <ButtonPlay
        ToggleMode={ToggleMode}
        className="pause-button"
        classNameIcon="pause"
        soundFunc={() => sound.pause()}
      />
    </>
  );
}

function Play({ sound }) {
  return (
    <>
      <div className="row">
        <Button sound={sound} />
      </div>
    </>
  );
}

export default Play;
