import "../styles/app.css";
import { useParams } from "react-router-dom";
import { Howl } from "howler";
import { supabase } from "../client/supabaseClient";

import Pet from "../components/tape";
import Play from "../components/play";
import Back from "../components/back";
import Volume from "../components/volume";

import { useState } from "react";

function Music() {
  const params = useParams();
  const [Data, setData] = useState();
  const [music, setMusic] = useState();

  const sound = new Howl({
    src: [music],
    html5: true,
    preload: true,
  });

  async function HandleUpload() {
    const { data, error } = await supabase.storage
      .from("playlists")
      .list(`${params.id}`, {
        limit: 25,
      });
    setData(data[0].name.replace(" ", "%20"));
    setMusic(
      import.meta.env.VITE_TEST_STORAGE_URL +
        `${params.id}` +
        "/" +
        `${Data}`
    );
  }
  HandleUpload();

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
            <Play data={Data} sound={sound} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
