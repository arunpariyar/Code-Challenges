import React from "react";

function HappyBanner({ counter }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {" " + counter} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
