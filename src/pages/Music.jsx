import "../styles/app.css";
import { useParams } from "react-router-dom";
import { Howl } from "howler";
import { supabase } from "../client/supabaseClient";

import Pet from "../components/tape";
import Play from "../components/play";
import Back from "../components/back";
import Volume from "../components/volume";

import Sound1 from "../sounds/Take Over.mp3";
import { useState } from "react";

function Music() {
  const params = useParams();
  const [data, setData] = useState()

  const sound = new Howl({
    src: [Sound1],
    html5: true,
    preload: true,
  });

  // supabase
  //   .from("music")
  //   .select("*")
  //   .then(({ data }) => {
  //     console.log(data);
  //   });

  async function HandleUpload() {
    const { data, error } = await supabase
      .storage
      .from('playlists')
      .list(`${params.id}`, {
        limit: 25,
      })
      console.log(data)
  }
  
  return (
    <div id={params.id}>
      <div className="container" onClick={() => HandleUpload()}>
        <div className="start">
          <Back sound={sound} />
        </div>
        <div className="end-top">
          <Volume/>
        </div>
        <div className="center_high">
          <Pet />
          <div className="end">
            <Play sound={sound} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
