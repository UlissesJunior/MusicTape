import "../styles/app.css";

function Pet() {
  return (
    <div className="box">
      <div className="center_low">
        <div className="tape-reels center_low">
          <div className="tape-title">
            <div className="lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              <div className="center_low">
                <div className="tape-window">
                  <div className="tape-music center_low">
                    <div className="tape-music-in"></div>
                  </div>
                  <div className="tape-view"></div>
                  <div className="tape-music center_low">
                    <div className="tape-music-in"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tape-in-out">
          <div className="tape-border-left"></div>
          <div className="tape-border-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Pet;
