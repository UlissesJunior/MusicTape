import React from 'react';

function Playing({ active }) {
    return(
        <div className="inline">
        <div className="playing">
          <div className={active ? "playing-1 animate-1" : "playing-1"}></div>
          <div className={active ? "playing-2 animate-2" : "playing-2"}></div>
          <div className={active ? "playing-1 animate-1" : "playing-1"}></div>
        </div>
        <div className="music-playing">
          League of Legends - Take Over
          <div className="album">Take Over</div>
        </div>
      </div>
)

}

export default Playing;