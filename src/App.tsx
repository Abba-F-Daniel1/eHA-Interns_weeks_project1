import React, { useState } from "react";
import AbbaPortfolio from "./Abba Folder/AbbaPortfolio";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Mukhtar Folder/Main";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<HomeButton />} />
          <Route path="/abba-portfolio" element={<AbbaPortfolio />} />
        </Routes>
        <Main/>
      </div>
    </Router>
  
  );
};

const HomeButton: React.FC = () => {
  
  const [buttonClicked, setButtonClicked] = useState(false);
  return !buttonClicked && (
    <Link
      onClick={() => setButtonClicked(true)}
      to="/abba-portfolio"
      className="flex items-center justify-center min-w-[100px] bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      Show Abba's Portfolio
    </Link>
  );
};


export default App;
