import React from "react";
import resumeFile from "../documents/ESahlani_Resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Get to know me
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Emily Sahlani,</span> your all-in-one documentation specialist
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            I make complex software easier to understand, helping users get the most out of products. With 8+ years in the software industry, I've been a technical writer and leader for software companies ranging from startups to large enterprises. 
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            My passion for technical documentation stems from a love of learning new technology. I dive deep into each topic, with thorough testing and exploring the source code to become an expert myself. This helps me create accurate and comprehensive content tailored to the target audience. 
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            I thrive in fast-paced environments where I can be hands-on with technology and improve documentation experiences. I've taught myself how to code to build documentation portals and automate publishing processes.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Emily Sahlani
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:emilysahlani@gmail.com">emilysahlani@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>31
                </li>
                <li>
                  <span className="fw-600 me-2">Experience:</span>9 years
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Toronto, Canada
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}

      {/* 
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <!----
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>8</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experience
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>650</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>   
          </div>  
        </div>  
    */}
      </div>
    </section>
  );
};

export default AboutUs;
