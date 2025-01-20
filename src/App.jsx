import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import IntroBanner from "./components/IntroBanner/IntroBanner";
import AboutSection from "./components/AboutSection/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection/ExpertiseSection";

function App() {
  return (
    <>
      <Header />
      <IntroBanner />
      <AboutSection />
      <ExpertiseSection/>
    </>
  );
}

export default App;
