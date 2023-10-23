import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const DarkMode: React.FC<DarkModeProps> = ({ darkMode, setDarkMode }) => {
  return (
    <BsFillMoonStarsFill
      onClick={() => setDarkMode(!darkMode)}
      className=" cursor-pointer text-2xl"
    />
  );
};

export default DarkMode;
