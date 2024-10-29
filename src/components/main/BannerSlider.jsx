import React from "react";
import Left from "./Left";
import Right from "./Right";

export default function BannerSlider() {
  return (
    <>
      <div className="container">
        <div className="Wrap">
          <div className="swiper__right">
            <Right/>
          </div>
          <div className="swiper__left">
            <Left/>
          </div>
        </div>
      </div>
    </>
  );
}
