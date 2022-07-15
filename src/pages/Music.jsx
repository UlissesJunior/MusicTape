import "../styles/app.css";
// import "../styles/fonts/Radwave.OTF";
import Pet from "../components/tape";
import Play from "../components/play";
import Back from "../components/back";
import { useParams } from "react-router-dom";
import { Howl, Howler } from "howler";

function Music() {
  const params = useParams();

  const soundSrc = "https://d169.d2mefast.net/tb/3/a3/take_over_ft._jeremy_mckinnon_a_day_to_remember_max_henry_worlds_2020_league_of_legends_mp3_9335.mp3"

  Howler.volume(0.6)

  const sound = new Howl({
    src: [soundSrc],
    html5: true,
    preload: true,
  });

  return (
    <div id={params.id}>
      <div className="container">
        <div className="start">
          <Back />
        </div>
        <div className="center_high">
          <Pet />
          <div className="end">
            <Play sound={sound}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
