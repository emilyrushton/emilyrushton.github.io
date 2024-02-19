import React from "react";
import resumeFile from "../documents/resume_erushtonsahlani.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2015 - 2017",
      title: "Master of Science",
      place: "Northeastern University",
      desc: "Technical Communication: Computer Industry Writing Concentration",
    },
    {
      yearRange: "2010 - 2014",
      title: "Honours Bachelor of Arts",
      place: "University of Waterloo",
      desc: "Honours English Language and Literature",
    },
  ];

  const professionalDevelopmentDetails = [
    {
      yearRange: "Sep 2021 - Oct 2021",
      title: "2089 - Managing People: Essentials",
      place: "University of Toronto School of Continuing Studies",
      desc: "",
    },
    {
      yearRange: "Oct 2020 - Nov 2020",
      title: "Crafting Memorable and Influential Presentations",
      place: "Society for Technical Communication",
      desc: "",
    },
    {
      yearRange: "Aug 2019 - Sep 2019",
      title: "Advanced Technical Editing",
      place: "Society for Technical Communication",
      desc: "",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "Nov 2022 - Present",
      title: "Manager, Documentation",
      place: "Nautical Commerce",
      desc: "Plan, research, test, and deliver comprehensive technical guides, API references, and training resources for both developers and end-users of an API-first marketplace software. Create e-learning videos, lead live training sessions for user onboarding, and regularly update release notes for new features. Customize and maintain the front-end of our API reference and Docusaurus documentation sites.",
    },
    {
      yearRange: "Mar 2022 - Nov 2022",
      title: "Manager, Product Operations",
      place: "Veeva Systems",
      desc: "Worked closely with product and engineering leadership to ensure software releases were planned, executed, and validated on schedule and compliant in a fast-paced and highly-regulated industry, while managing the technical writing team and overseeing all release & end-user documentation.",
    },
    {
      yearRange: "Apr 2020 - Mar 2022",
      title: "Technical Writer Lead",
      place: "Veeva Systems",
      desc: "Grew the technical writing team & led the documentation efforts to support the needs of our growing application. Identified scope of release work and assignments for writing team. Managed day-to-day operations and publishing activities for our online help website and GitLab CI/CD. Delivered supporting documents for each release, including release notes, online help, video tutorials, and reference guides.",
    },
    {
      yearRange: "Mar 2019 - Apr 2020",
      title: "Technical Writer",
      place: "Veeva Systems",
      desc: "As the first technical writer for a new cloud-based application team, Vault Safety, I built and launched an online help site using Jekyll, and also authored the complete user guide, ensuring comprehensive support documentation was available for each release.",
    },
    {
      yearRange: "Sep 2017 - Mar 2019",
      title: "Technical Content Developer II",
      place: "Dell EMC",
      desc: "Delivered documentation for multiple products for a database administrator audience. Solved peers' structured authoring challenges and conducted DITA XML quality reviews. Cut translation costs by enhancing content reuse and eliminating redundancies. Enhanced UI text quality through code reviews and edits.",
    },
    {
      yearRange: "Jul 2015 - Sep 2017",
      title: "Technical Content Developer I",
      place: "Dell EMC",
      desc: "Created and edited software documentation, including installation, operation and maintenance instructions. Also developed a set of SEO best practices to improve searchability of PDF guides",
    },
  ];

  const skills = [
    {
      name: "Git",
      years: "5",
    },
    {
      name: "Docker",
      years: "5",
    },
    {
      name: "REST & GraphQL APIs",
      years: "5",
    },
    {
      name: "HTML/CSS",
      years: "5",
    },
    {
      name: "Javascript",
      years: "5",
    },
    {
      name: "Liquid & YAML",
      years: "4",
    },
    {
      name: "Markdown",
      years: "5",
    },
    {
      name: "DITA XML",
      years: "4",
    },
    {
      name: "Algolia",
      years: "5",
    },
    {
      name: "Camtasia",
      years: "8",
    },
    {
      name: "Docusaurus",
      years: "2"
    },
    {
      name: "Jekyll",
      years: "4"
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="container">
  <div className="row gx-5">
    {/* Left Column for Education, Skills, and Professional Development */}
    <div className="col-md-4">
      {/* My Education */}
  <div className="mb-5">
      <h2 className={"text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")}>
        Education
      </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-3" }>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
              </div>
      
      {/* My Skills */}
  <div className="mb-5">
      <h2 className={"text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")}>
        Tools & technology
      </h2>
      <div className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
      <ul className={"list-unstyled " + (darkTheme ? "text-white-50" : "text-dark")}>
        {skills.map((skill, index) => (
          <li key={index} className="mb-2">
            <i className={"fas fa-check-circle me-2 featured-box-icon text-primary"}></i>
            {skill.name}
          </li>
        ))}
      </ul>
      </div>
            </div>
      
      {/* My Professional Development */}

  <div className="mb-4">
      <h2 className={"text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")}>
        Professional development
      </h2>
            {professionalDevelopmentDetails.length > 0 &&
              professionalDevelopmentDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-3" }>
                    {value.place}
                  </p>
                </div>
              ))}
    </div>
    </div>
    
    {/* Right Column for Experience */}
    <div className="col-md-8">
      {/* My Experience */}
      <h2 className={"text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")}>
        Experience
      </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-3"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
    </div>
  </div>
</div>

        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
        </div>
    </section>
  );
};

export default Resume;
