import React from "react";
import { AboutMe, Contact, Footer, Header, Skills } from "./components";

import './myportfolio.css';

const AbbaPortfolio: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false); // Add state for dark mode

  // Add an effect to toggle dark mode class on the body
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <main>
        <AboutMe />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AbbaPortfolio;
