import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";

export default function RootLayout() {
  return (
    <>
      <main className="h-screen">
        <Navbar />
        <div className="px-2">
          <Outlet />
        </div>
      </main>
    </>
  );
}
