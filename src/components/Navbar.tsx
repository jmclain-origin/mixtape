import React, { useCallback, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBackward, FaForward } from "react-icons/fa";
import { useScrollPosition } from "hooks/useScrollPosition";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollPosition = useScrollPosition();

  const isHome = location.pathname === "/";
  const isPlaylist = /play\/[AB]$/g.test(location.pathname);
  const isAside = /play\/A$/g.test(location.pathname);
  const isBside = /play\/B$/g.test(location.pathname);

  const handleNavigationClick = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      const action: "back" | "forward" | null | string =
        event.currentTarget.getAttribute("data-action");
      if (action === "back") {
        isAside && navigate("/intro");
        isBside && navigate("/play/A");
      } else if (action === "forward") {
        isAside && navigate("/play/B");
        isBside && navigate("/play/bonus");
      }
    },
    [isAside, isBside, navigate]
  );
  return (
    <nav
      className={`flex items-center justify-between px-5 py-2 sticky top-0 w-full transition-all ${
        scrollPosition > 0 ? "bg-gradient-to-br from-dark-purple from-30% to-deep-purple to-90% border-b shadow-md shadow-black" : "bg-transparent"
      }`}
    >
      <span
        className="text-3xl grayscale hover:grayscale-0 cursor-pointer"
        onClick={handleNavigationClick}
        data-action="back"
      >
        {isPlaylist ? <FaBackward className="h-8 w-8 hover:text-yellow-400 transition-all" /> : <>&#10084;</>}
      </span>
      {!isHome && (
        <h2 className="text-7xl font-sassy">
          {isAside ? "A Side" : isBside ? "B Side" : "Mix Tape"}
        </h2>
      )}
      <span
        className="text-3xl grayscale hover:grayscale-0 cursor-pointer"
        onClick={handleNavigationClick}
        data-action="forward"
      >
        {isPlaylist ? <FaForward className="h-8 w-8 hover:text-yellow-400 transition-all" /> : <>&#10084;</>}
      </span>
    </nav>
  );
};

export default Navbar;
