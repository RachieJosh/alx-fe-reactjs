import React from "react";
import Header from "./components/Header"; // Import Header
import MainContent from "./components/MainContent"; // Import MainContent
import Footer from "./components/Footer"; // Import Footer

function App() {
  return (
    <div>
      <Header /> {/* Include Header */}
      <MainContent /> {/* Include MainContent */}
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default App;
