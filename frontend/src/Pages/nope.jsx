import React from "react";
import { Audio } from "react-loader-spinner";
function nope() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default nope;
