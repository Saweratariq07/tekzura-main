import React from "react";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-primaryBlue rounded-full blur-[180px] opacity-40 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[350px] h-[350px] bg-neonBlue rounded-full blur-[150px] opacity-30 bottom-10 right-10 animate-ping"></div>
    </div>
  );
}
