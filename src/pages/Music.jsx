import "../styles/app.css";
import Pet from "../components/tape";
import Play from "../components/play";
import Back from "../components/back";
import Volume from "../components/volume";
import { useParams } from "react-router-dom";
import { Howl } from "howler";
import Sound1 from "../sounds/Take Over.mp3"

function Music() {
  const params = useParams();

  // const soundSrc = "https://d169.d2mefast.net/tb/3/a3/take_over_ft._jeremy_mckinnon_a_day_to_remember_max_henry_worlds_2020_league_of_legends_mp3_67889.mp3"
  const sound = new Howl({
    src: [Sound1],
    html5: true,
    preload: true,
  });

  return (
    <div id={params.id}>
      <div className="container">
        <div className="start">
          <Back sound={sound} />
        </div>
        <div className="end-top">
          <Volume />
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
