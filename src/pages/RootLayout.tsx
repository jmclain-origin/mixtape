import React, { useCallback, MouseEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaBackward, FaForward } from "react-icons/fa";

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isPlaylist = /play\/[AB]$/g.test(location.pathname);
  const isAside = /play\/A$/g.test(location.pathname);
  const isBside = /play\/B$/g.test(location.pathname);
 
  const handleNavigationClick = useCallback((event: MouseEvent<HTMLSpanElement>) => {
    const action: "back" | "forward" | null | string = event.currentTarget.getAttribute('data-action');
    if (action === "back") {
      isAside && navigate("/intro");
      isBside && navigate("/play/A");
    } else if (action === "forward") {
      isAside && navigate("/play/B");
      isBside && navigate("/bonus");
    }
  }, [isAside, isBside, navigate]);

  return (
    <>
      <nav className="flex items-center justify-between px-3 py-2">
        <span className="text-3xl grayscale" onClick={handleNavigationClick} data-action="back" >
          {isPlaylist ? (
            <FaBackward
              className="control-button"
            />
          ) : (
            <>&#10084;</>
          )}
        </span>
        {!isHome && <h2 className="text-7xl font-sassy">{isAside ? 'A Side' : isBside ? 'B Side' : "Mix Tape"}</h2>}
        <span className="text-3xl grayscale" onClick={handleNavigationClick} data-action="forward">
          {isPlaylist ? (
            <FaForward
              className="control-button"
            />
          ) : (
            <>&#10084;</>
          )}
        </span>
      </nav>
      <main className="min-h-screen px-4">
        <Outlet />
      </main>
    </>
  );
}
