import "../styles/app.css";

function Play({ sound }) {
  
  return (
    <>
      <div className="row">
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
        <div className="pause-button">
           <div onClick={() => sound.pause()} className="pause"></div>
        </div>
        <div className="play-button">
           <div onClick={() => sound.play()} className="play"></div>
        </div>
      </div>
    </>
  );
}

export default Play;
