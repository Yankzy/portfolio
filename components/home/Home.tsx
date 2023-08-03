import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import YankzEcho from "../Chat";
import Testimonial from "../Testimonials";

export const Home = () => {
  return (
    <>
      <div className={`flex ${styles.home}`}>
        <SideBar />
        <main className="flex-grow">
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Experience />
          {/* <Testimonial /> */}
          <Contact />
          {/* <YankzEcho /> */}

          <iframe
            title="Embedded Widget"
            src="https://widget-849.pages.dev/"
            width="100%"
            height="100%"
            style={{
              position: 'fixed',
              bottom: '4px',
              right: '4px',
              zIndex: 50,
            }}
          />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
