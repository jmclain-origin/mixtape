import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        <Outlet />
      </main>
    </>
  );
}
