import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Playing({ active, data = "" }) {
  useEffect(() => {
    document.title = data.replace(".mp3", "");
  }, [data]);
  const params = useParams();
  return (
    <div className="inline">
      <div className="playing">
        <div className={active ? "playing-1 animate-1" : "playing-1"}></div>
        <div className={active ? "playing-2 animate-2" : "playing-2"}></div>
        <div className={active ? "playing-1 animate-1" : "playing-1"}></div>
      </div>
      <div className="music-playing">
        {data.replace(".mp3", "")}
        <div className="album">{params.id}</div>
      </div>
    </div>
  );
}

export default Playing;
