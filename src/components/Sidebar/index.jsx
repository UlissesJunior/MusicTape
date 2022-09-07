import "../../assets/styles/app.css";
import { useEffect, useState } from "react";
import { supabase } from "../../client/supabaseClient";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { ExternalLink } from "react-external-link";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [star, setStar] = useState(false);
  const [data, setData] = useState();

  const Toogle = () => {
    setOpen(!open);
  };

  const ConfettiToogle = () => {
    setStar(!star);
  };

  widthc = 80;
  if (window.innerWidth < 500) {
    var widthc = 60;
  }

  useEffect(() => {
    async function HandleView() {
      try {
        const { data, error } = await supabase.storage
          .from("playlists")
          .list("", {
            limit: 25,
          });
        setData(data);
      } catch (e) {
        console.log(e);
      }
    }
    HandleView();
  }, [open === false]);

  return (
    <>
      <div className={open ? "sidebar" : "sidebar-active"}>
        <div className={open ? "" : "sidebar-line"}>
          <div onClick={Toogle} className="click-zone">
            <div className={open ? "hamburguer" : "hamburguer active"}></div>
          </div>
          <div className="playlists">
            <ul>
              {data?.map((music) => {
                return (
                  <>
                    <Link to={music.name}>
                      <h2 key={music.id}>{music.name}</h2>
                    </Link>
                  </>
                );
              })}
            </ul>
          </div>
          {star ? (
            <div className={open ? "confetti" : "none"}>
              <Confetti
                width={widthc}
                height={110}
                numberOfPieces={32}
                gravity={0.2}
                colors={["#3231F1", "#fff"]}
              />
            </div>
          ) : (
            " "
          )}
          <ExternalLink style={{position: "absolute", bottom: "0px", right: "0px"}}href="https://github.com/UlissesJunior/MusicTape">
            <div
              onClick={ConfettiToogle}
              className={open ? "star" : "none"}
            ></div>
          </ExternalLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
