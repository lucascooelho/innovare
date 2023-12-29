import React from "react";

const BackToTop = () => {
  return (
    <a
      href="#top"
      className="back-top-btn"
      aria-label="back to top"
      data-back-top-btn
    >
      <ion-icon name="caret-up" aria-hidden="true"></ion-icon>
    </a>
  );
};

export default BackToTop;
