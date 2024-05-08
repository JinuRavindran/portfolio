import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(false);
  const themetoggle = () => {
    setTheme((prevMode) => !prevMode);
  };
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkmode") === "true";
    setTheme(isDarkMode);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("darkmode", theme);
  }, [theme]);

  return (
    <div
      className="px-4 rounded-md text-2xl cursor-pointer"
      onClick={themetoggle}
    >
      {theme ? (
        <GoSun className="text-white" />
      ) : (
        <FaRegMoon className="text-black" />
      )}
    </div>
  );
};

export default ThemeSwitch;
