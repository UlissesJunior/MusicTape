import "../../assets/styles/app.css";
import { useEffect, useState } from "react";
import { supabase } from "../../client/supabaseClient";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState();

  const Toogle = () => {
    setOpen(!open);
  };

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
        <div
          onClick={Toogle}
          className={open ? "hamburguer" : "hamburguer active"}
        ></div>
        <div className="playlists">
          <ul>
            {data?.map((music) => {
              return (
                <>
                  {" "}
                  <Link to={music.name}>
                    <h2 key={music.id}>{music.name}</h2>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Sidebar;
