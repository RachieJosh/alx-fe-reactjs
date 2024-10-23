import React from "react";
import Header from "./components/Header"; // Import Header
import MainContent from "./components/MainContent"; // Import MainContent
import Footer from "./components/Footer"; // Import Footer
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header /> {/* Include Header */}
      <MainContent /> {/* Include MainContent */}
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default App;
