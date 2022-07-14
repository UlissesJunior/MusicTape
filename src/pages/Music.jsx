import "../styles/app.css";
// import "../styles/fonts/Radwave.OTF";
import Pet from "../components/tape";
import Play from "../components/play";
import Back from "../components/back";
import { useParams } from "react-router-dom";

import playlists from "../components/playlists"

// var sound = new Howl({
//   src: [playlists],
//   autoplay:true,
//   html5:true
// });

// sound.play();

function Music() {
  const params  = useParams();
  console.log(playlists)
  return (
  
    <div id={params.id}>
      <div className="container">
        <div className="start">
          <Back />
        </div>
        <div className="center_high">
          <Pet/>
          <div className="end">
            <Play />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
