import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import IntroBanner from "./components/IntroBanner/IntroBanner";

function App() {
  return (
    <>
      <Header />
      <IntroBanner />
    </>
  );
}

export default App;
