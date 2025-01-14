import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import IntroBanner from "./components/IntroBanner/IntroBanner";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  return (
    <>
      <Header />
      <IntroBanner />
      <AboutSection />
    </>
  );
}

export default App;
