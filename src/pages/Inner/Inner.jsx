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
            I have two years of front-end experience, during these years I have
            faced many challenges and experience on how to solve them. I was
            involved in front-end development in two real projects and fulfilled
            the requirements on time. During the bootcamps attended, I
            participated in many challenges and won awards.
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
