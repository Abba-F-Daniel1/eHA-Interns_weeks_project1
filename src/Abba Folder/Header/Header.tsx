import React from 'react';
import Navbar from '../components/Navbar'

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="App-header">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

export default Header;
