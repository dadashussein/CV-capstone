import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CollapsedMenu from "./CollapsedMenu.jsx";
import { experienceData } from "../../utils/data.js";
import handleScroll from "../../utils/handleScroll.js";

import Box from "../../components/Box/Box.jsx";
import Expertise from "../../components/Expertise/Expertise.jsx";
import TimeLine from "../../components/Timeline/TimeLine";
import Portfolio from "../../components/Portfolio/Portfolio";
import Feedbacks from "../../components/Feedbacks/Feedbacks.jsx";
import Skills from "../../components/Skills/Skills";
import Address from "../../components/Address/Address";
import "./inner.scss";

const Inner = () => {
  const [collapsed, setCollapsed] = useState(false);
  const activeSection = useSelector((state) => state.section.activeSection);
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll(dispatch);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [activeSection, dispatch]);

  return (
    <main className="main">
      <CollapsedMenu collapsed={collapsed} setCollapsed={setCollapsed} />

      <section className={`container ${collapsed ? "collapsed" : ""}`}>
        <Box id="about" title="About">
          <p>
            I&apos;ve been learning Front-End technologies, particularly React,
            with EPAM Upskills for over 7 months. Currently, I&apos;m at
            Holberton School, where I&apos;m diving into C, Python, and other
            most important programs. I&apos;m dedicated to continuous learning
            and growth in the software world, with a goal of contributing to
            larger tech projects.
          </p>
        </Box>
        <Box id="education" title="Education">
          <TimeLine />
        </Box>

        <Box id="skills" title="Skills">
          <Skills />
        </Box>

        <Box id="experience" title="Experience">
          <Expertise data={experienceData} />
        </Box>
        <Box id="portfolio" title="Portfolio">
          <Portfolio />
        </Box>
        <Box id="contacts" title="Contacts">
          <Address />
        </Box>
        <Box id="feedbacks" title="Feedbacks">
          <Feedbacks />
        </Box>
      </section>
    </main>
  );
};

export default Inner;
