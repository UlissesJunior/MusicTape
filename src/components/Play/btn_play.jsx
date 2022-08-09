import React from "react";

function ButtonPlay( { className, classNameIcon, soundFunc, ToggleMode} ) {
  return (
    <div className={className} onClick={ToggleMode}>
      <div onClick={soundFunc} className={classNameIcon}></div>
    </div>
  );
}

export default ButtonPlay;