import React, { useEffect, useRef, useState } from "react";
import dpcguide from "../documents/Data-Protection-Central-18.2-Security-Configuration-Guide.pdf";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DEVELOPER: "Developer",
    USER: "User",
    VIDEO: "Multi-Media",
    REFERENCE: "Reference",
  };

  const projectsData = [
    {
      title: "Get Started Guide",
      projectInfo:
        "This comprehensive getting started guide is designed to assist clients and partners new to Nautical. It provides a detailed introduction to the platform's capabilities and step-by-step instructions for initial setup, including configuration options and essential business considerations. I crafted and developed the guide, incorporating a navigation tracker to enhance user experience by facilitating easy progress through the material.",
      client: "Nautical Commerce",
      technologies: "Docusaurus, React, Markdown",
      industry: "eCommerce",
      date: "2023",
      url: {
        name: "Getting Started with Nautical",
        link: "https://guide.nauticalcommerce.com/get-started/",
      },
      thumbImage: "images/projects/get-started-nautical.png",
      categories: [filters.USER],
    },
    {
      title: "PayPal Integration with Nautical",
      projectInfo:
        "I produced this PayPal integration tutorial video, complemented by an in-depth article. I personally tested the integration process, captured all necessary screenshots, and verified each step to ensure accuracy and reliability of the guide.",
      client: "Nautical Commerce",
      technologies: "Docusaurus, Markdown, Camtasia, WellSaid Labs",
      industry: "eCommerce",
      date: "2024",
      url: {
        name: "Connect PayPal for Payouts",
        link: "https://guide.nauticalcommerce.com/docs/users-guide/apps/paypal/",
      },
      thumbImage: "images/projects/paypal-guide.png",
      categories: [filters.VIDEO, filters.USER],
    },
    {
      title: "Vault Safety REST API Reference",
      projectInfo:
        "I developed the Safety section for the Veeva Vault REST API reference using Slate.js. My role involved rigorously testing each API component, validating endpoints, and accurately describing fields. Additionally, I collected API request and response samples to enhance the documentation's utility and reliability.",
      client: "Veeva Systems",
      technologies: "Markdown, REST API, Slate.js",
      industry: "Pharmacovigilance",
      date: "2022",
      url: {
        name: "Vault Safety REST API Reference",
        link: "https://developer.veevavault.com/api/22.1/#safety",
      },
      thumbImage: "images/projects/rest-api-reference.png",
      categories: [filters.DEVELOPER, filters.REFERENCE],
    },
    {
      title: "Nautical GraphQL API Reference",
      projectInfo:
        "I developed this GraphQL API reference for Nautical using Magidoc, designed to auto-update with each new release through schema introspection. Despite its automated nature, I meticulously organized hundreds of API entities to enhance user navigation, categorizing them by domain, followed by queries, mutations, or objects for straightforward access. Additionally, I customized the website's design to match the Nautical brand aesthetic and implemented version control for improved documentation management.",
      client: "Nautical Commerce",
      technologies: "GraphQL, Svelte, JSON, Javascript, Magidoc",
      industry: "eCommerce",
      date: "2023",
      url: {
        name: "Nautical GraphQL API Reference",
        link: "https://guide.nauticalcommerce.com/api/",
      },
      thumbImage: "images/projects/graphql-api-reference.png",
      categories: [filters.DEVELOPER, filters.REFERENCE],
    },
    {
      title: "How AS2 Gateway Communication Works",
      projectInfo:
        "I developed this interactive animation to demonstrate the secure file exchange via an AS2 gateway connection. This animation aims to simplify the understanding of the file transfer process for a non-technical audience, clarifying various events that occur during the exchange.",
      client: "Veeva Systems",
      technologies: "HTML5, Soala Animate, Jekyll",
      industry: "Pharmacovigilance",
      date: "2021",
      url: {
        name: "How AS2 Gateway Communication Works",
        link: "https://safety.veevavault.help/gr/user-help/send-safety-reports/send-gateway-transmission/#what-is-as2-gateway-communication",
      },
      thumbImage: "images/projects/as2-gateway.png",
      categories: [filters.VIDEO, filters.USER],
    },
    {
      title: "E2B Generation Data Mapping",
      projectInfo:
        "I developed a master YAML file to map the generation of E2B files, an XML file format for electronic submission of individual safety case reports, from our system's source fields. Addressing the challenge of managing hundreds of fields and the varying format requirements of different regulatory agencies, this solution simplifies maintenance. I used Liquid logic to single-source tables, ensuring accurate display of relevant information across different tabs tailored to each regulatory format.",
      client: "Veeva Systems",
      technologies: "Jekyll, YAML, Liquid, HTML",
      industry: "Pharmacovigilance",
      date: "2020",
      url: {
        name: "E2B Generation Data Mapping",
        link: "https://safety.veevavault.help/gr/user-help/generate-icsrs/e2b-generation/",
      },
      thumbImage: "images/projects/e2b-data-mapping.png",
      categories: [filters.REFERENCE],
    },
    {
      title: "Accepting Payments with Stripe",
      projectInfo:
        "I authored this guide detailing the secure integration process between Nautical and Stripe for payment capture, without direct card handling. This involved an in-depth analysis of the source code, comprehensive testing of the payments API at each step, and extensive research on Stripe.",
      client: "Nautical",
      technologies: "GraphQL, Docusaurus, React, Markdown",
      industry: "eCommerce",
      date: "December 2023",
      url: {
        name: "Accepting Payments with Stripe",
        link: "https://guide.nauticalcommerce.com/docs/developer/guides/payments/stripe-payments/",
      },
      thumbImage: "images/projects/stripe-payments.png",
      categories: [filters.DEVELOPER],
    },
    {
      title: "First Steps for Administrators",
      projectInfo:
        "I created this article featuring interactive accordions, enabling readers to customize their experience by expanding or hiding information as needed during system setup. The content is single-sourced from comprehensive admin articles on each topic, with 'Read More' links for in-depth exploration.",
      client: "Veeva Systems",
      technologies: "Jekyll, Liquid, Markdown",
      industry: "Pharmacovigilance",
      date: "2019",
      url: {
        name: "First Steps for Safety Administrators",
        link: "https://safety.veevavault.help/gr/user-help/get-started/first-steps-for-safety-administrators/",
      },
      thumbImage: "images/projects/first-steps-safety-admin.png",
      categories: [filters.USER],
    },
    {
      title: "Customizing the Storefront",
      projectInfo:
        "I authored this guide aimed at assisting front-end developers in effortlessly setting up with Nautical's React-based website template for storefronts. It details the main components included in the storefront template and guides on how to modify each one.",
      client: "Nautical Commerce",
      technologies: "Docusaurus, Markdown, ",
      industry: "eCommerce",
      date: "2024",
      url: {
        name: "Customizing the Storefront",
        link: "https://guide.nauticalcommerce.com/docs/developer/storefront/customizing-the-storefront/",
      },
      thumbImage: "images/projects/customize-storefront.png",
      categories: [filters.DEVELOPER],
    },
    {
      title: "Data Protection Central Security Configuration Guide",
      projectInfo:
        "This writing sample showcases a Security Configuration Guide for a web-based monitoring application, focusing on backup and recovery operations in a data center. A highlight of my work on this guide is the addition of a section dedicated to setting up LDAP and Active Directory authentication, which stands as one of my proudest contributions.",
      client: "Dell EMC",
      technologies: "SDL Tridion Docs, XMetaL Author, DITA XML",
      industry: "Data Storage",
      date: "2018",
      url: {
        name: "Data Protection Central 18.2 Security Configuration Guide (PDF)",
        link: "/documents/Data-Protection-Central-18.2-Security-Configuration-Guide.pdf",
      },
      thumbImage: "images/projects/dell-emc-guide.png",
      categories: [filters.DEVELOPER],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
