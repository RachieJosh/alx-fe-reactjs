import React from "react";
import Header from "./components/Header"; // Import Header
import MainContent from "./components/MainContent"; // Import MainContent
import Footer from "./components/Footer"; // Import Footer
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header /> {/* Include Header */}
      <MainContent /> {/* Include MainContent */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default App;
