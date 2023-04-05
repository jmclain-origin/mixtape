import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import { useScreenWidth } from "hooks/useScreenWidth";

export default function RootLayout() {
  const screenWidth = useScreenWidth();
  return (
    <>
      <main
        className={`min-h-screen max-w-[450px] mx-auto bg-gradient-to-br from-dark-purple to-deep-purple ${
          screenWidth > 452
            ? "border-x-[24px] border-zinc-600 shadow-xl shadow-black"
            : ""
        }`}
      >
          <Navbar />
          <div className="px-2">
            <Outlet />
          </div>
      </main>
    </>
  );
}
