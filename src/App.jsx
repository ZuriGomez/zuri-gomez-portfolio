import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import IntroBanner from "./components/IntroBanner/IntroBanner";
import AboutSection from "./components/AboutSection/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection/ExpertiseSection";
import MyWorkSection from "./components/MyWorkSection/MyWorkSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <IntroBanner />
      <AboutSection />
      <ExpertiseSection />
      <MyWorkSection />
      <ContactSection />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
