"use client";
import { useTheme } from "next-themes";
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-ctp-rosewater text-2xl text-ctp-rosewater hover:bg-ctp-rosewater hover:text-ctp-base transition-all duration-300 ease-in-out"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <RiSunFill /> : <RiMoonClearFill />}
    </button>
  );
};

export default ThemeToggle;
