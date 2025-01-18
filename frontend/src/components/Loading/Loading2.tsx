import React from "react";
import botLogo from "../../Assets/Images/bot.png";
import "./Loading2.css";	

export function Loading2() {
  return (
    <div className="text-center flex flex-col items-center w-full flex-grow">
      <div className="loading-circle"></div>
      <p
        className="text-white text-b1 mb-4 font-sans"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
      </p>
    </div>
  );
}
