import React, { useEffect, useState } from "react";
import botLogo from "../../Assets/Images/bot.png";

export function Loading() {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => (prev.length < 10 ? prev + "." : "Loading"));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-start items-end space-x-2">
      <img
        src={botLogo}
        alt="Bot Logo"
        className="rounded-full w-14 h-14 border-2 border-black mb-2 shadow-lg animate-pulse"
      />
      {/* Chat Bubble */}
      <div className="relative bg-blue-100 text-blue-900 rounded-lg p-4 shadow-md">
        <p className="text-md font-medium">
          {/* Dot Animation */}
          <span className="inline-flex">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
          </span>
        </p>
      </div>
    </div>
  );
}
