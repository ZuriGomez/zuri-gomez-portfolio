import React from "react";
import Button from "../Button/Button";
import "../IntroBanner/IntroBanner.scss";

function IntroBanner() {
  return (
    <section className="banner">
        <h3 className="text">HI THERE 👋🏻 , I'M</h3>
        <p className="name">zuri gomez.</p>
        <h4 className="titles">SOFTWARE ENGINEER - FULL STACK DEVELOPER</h4>
        <div className="button__hire">
          <Button text="HIRE ME" path="mailto:zuri.gomez.crz@gmail.com" 
          isExternal={true}  />
        </div>
    </section>
    )
}

export default IntroBanner;
