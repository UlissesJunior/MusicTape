import "../assets/styles/app.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Howl } from "howler";
import { supabase } from "../client/supabaseClient";

import Pet from "../components/tape";
import Play from "../components/play";
import Back from "../components/back";
import Volume from "../components/volume";

function Music() {
  const params = useParams();
  const [data, setData] = useState();
  const [music, setMusic] = useState();
  const [end, setEnd] = useState(0);
  const [status, setStatus] = useState(true);
  const [length, setLength] = useState("");
  const [random, setRandom] = useState(false);
  // const [isplaying, setIsPlaying] = useState()

  const sound = new Howl({
    src: [music],
    html5: true,
    preload: true,
    // onplay: () => {

    // },
    // onpause: () => {

    // },
    onend: () => {
      setEnd(end + 1);
      sound.pos(end);
      setStatus(true);
    },
  });

  useEffect(() => {
    async function HandleUpload() {
      try {
        const { data, error } = await supabase.storage
          .from("playlists")
          .list(`${params.id}`, {
            limit: 25,
          });
        setLength(data.length);
        if (random === true) {
          const random = Math.floor(Math.random() * length);
          console.log(random);
          setData(data[random].name);
          setMusic(
            import.meta.env.VITE_TEST_STORAGE_URL +
              `${params.id}` +
              "/" +
              `${data[random]?.name.replaceAll(" ", "%20")}`
          );
        } else {
          setData(data[end].name);
          setMusic(
            import.meta.env.VITE_TEST_STORAGE_URL +
              `${params.id}` +
              "/" +
              `${data[end]?.name.replaceAll(" ", "%20")}`
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
    HandleUpload();
    sound.pause();
  }, [end && status ? sound.play() : sound.pause()]);

  document.body.onkeyup = function (event) {
    if (event.keyCode == 39 && end < length) {
      setStatus(false);
      setEnd(end + 1);
    }
    if (event.keyCode == 37 && end > 0) {
      setStatus(true);
      setEnd(end - 1);
    }
  };

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
            <Play data={data} sound={sound} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
