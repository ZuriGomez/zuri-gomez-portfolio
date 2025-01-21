import React from "react";
import "../ExpertiseSection/ExpertiseSection.scss";
import DatabaseIcon from "../../assets/icons/database_icon.svg";
import ReactIcon from "../../assets/icons/react_icon.svg";
import SoftwareDev from "../../assets/icons/software_dev.svg";
import APIIcon from "../../assets/icons/api_icon.svg";

function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <h1 className="expertise-section__title">
        <span className="expertise-section__title-number">02.</span>{" "}
        <span className="expertise-section__title-text">My Expertise</span>
      </h1>
      <div className="container">
        <div className="expertise section__container">
          <div className="expertise section__wrapper">
            <div className="expertise section__wrapper-header">
              <img
                className="expertise section__wrapper-icon"
                src={SoftwareDev}
                alt="Software Developer Icon"
              />
              <h3 className="expertise section__wrapper-title">
                <span>Software</span> Development
              </h3>
            </div>
            <h3 className="expertise section__text">
              I specialize in <span className="highlight">functional</span>{" "}
              and <span className="highlight">object-oriented programming</span> with{" "}
              <span className="highlight">Python</span>,{" "}
              <span className="highlight">JavaScript</span>, and
              <span className="highlight"> TypeScript</span>. Using methodologies
              like <span className="highlight">Agile</span> and{" "}
              <span className="highlight">Waterfall</span>, I deliver tailored,
              <span className="highlight"> scalable solutions</span> with a focus on <span className="highlight">efficiency</span>, <span className="highlight">maintainability</span>, and
              meeting project goals <span className="highlight">on time</span>.
            </h3>
          </div>
          <div className="expertise full-stack_section__main">
            <h2 className="expertise full-stack_section__title">
              Full-Stack Development
            </h2>
            <div className="expertise full-stack_section__container">
              <div className="expertise full-stack_section__wrapper">
                <div className="expertise full-stack_section__wrapper-header">
                  <img
                    className="expertise full-stack_section__wrapper-icon"
                    src={ReactIcon}
                    alt="FrontEnd Icon"
                  />
                  <h3 className="expertise full-stack_section__wrapper-title">
                    <span>Front-end</span> Development
                  </h3>
                </div>
                <h3 className="expertise full-stack_section__text">
                  I specialize in creating <span className="highlight">responsive</span>, <span className="highlight">user-friendly</span> interfaces
                  using <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, and <span className="highlight">JavaScript</span> to deliver engaging and
                  accessible web experiences. Leveraging <span className="highlight">modern frameworks</span> like
                  <span className="highlight"> React</span>, I design <span className="highlight">intuitive layouts</span>, <span className="highlight">interactive elements</span>, and
                  <span className="highlight"> seamless navigation</span> that enhance user satisfaction and
                  engagement. My expertise in <span className="highlight">responsive design</span> ensures
                  <span className="highlight"> compatibility</span> across devices and browsers for a consistent user
                  experience.
                </h3>
              </div>
              <div className="expertise full-stack_section__wrapper">
                <div className="expertise full-stack_section__wrapper-header">
                  <img
                    className="expertise full-stack_section__wrapper-icon"
                    src={APIIcon}
                    alt="BackEnd Icon"
                  />
                  <h3 className="expertise full-stack_section__wrapper-title">
                    <span>Back-end</span> Development
                  </h3>
                </div>
                <h3 className="expertise full-stack_section__text">
                  I develop robust <span className="highlight">server-side applications</span> and scalable business
                  logic using technologies like <span className="highlight">Node.js</span> and <span className="highlight">Express.js.</span> By
                  building efficient <span className="highlight">APIs</span>, managing server communication, and
                  implementing <span className="highlight">authentication</span> and <span className="highlight">authorization</span>, I ensure <span className="highlight">secure</span>
                  and <span className="highlight">high-performance</span> back-end systems that power dynamic
                  applications. My solutions are designed with modular
                  architecture and maintainability in mind, optimizing both speed
                  and reliability.
                </h3>
              </div>
              <div className="expertise full-stack_section__wrapper">
                <div className="expertise full-stack_section__wrapper-header">
                  <img
                    className="expertise full-stack_section__wrapper-icon"
                    src={DatabaseIcon}
                    alt="Database Icon"
                  />
                  <h3 className="expertise full-stack_section__wrapper-title">
                    <span>Database</span> Management
                  </h3>
                </div>
                <h3 className="expertise full-stack_section__text">
                  I have experience in <span className="highlight">database management</span>, including designing,
                  implementing, and maintaining <span className="highlight">MySQL</span> databases. I create
                  efficient <span className="highlight">data models</span>, write <span className="highlight">optimized queries</span>, and handle <span className="highlight">data
                  integration</span> to ensure smooth and fast data retrieval. My
                  experience also includes <span className="highlight">database migrations</span>, <span className="highlight">indexing</span>, and
                  <span className="highlight"> backup strategies</span> to ensure <span className="highlight">data security</span> and <span className="highlight">accessibility</span>.
                  These skills enable me to support seamless functionality in
                  full-stack applications and contribute to the development of
                  scalable, efficient web solutions.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
