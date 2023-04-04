import React, { useCallback, MouseEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaBackward, FaForward } from "react-icons/fa";

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isPlaylist = /play\/[AB]$/g.test(location.pathname);
  const isAside = /search\/A$/g.test(location.pathname);
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
      <nav className="flex items-center justify-between px-5 py-4">
        <span className="text-2xl" onClick={handleNavigationClick} data-action="back" >
          {isPlaylist ? (
            <FaBackward
              className="control-button"
            />
          ) : (
            <>&#10084;</>
          )}
        </span>
        {!isHome && <h2 className="text-3xl">Mix Tape</h2>}
        <span className="text-2xl" onClick={handleNavigationClick} data-action="forward">
          {isPlaylist ? (
            <FaForward
              className="control-button"
            />
          ) : (
            <>&#10084;</>
          )}
        </span>
      </nav>
      <main className="min-h-screen px-4 pt-3">
        <Outlet />
      </main>
    </>
  );
}
