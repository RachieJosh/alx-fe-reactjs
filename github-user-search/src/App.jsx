// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Search />} />
          {/* Other routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
