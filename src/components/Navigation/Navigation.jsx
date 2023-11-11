import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./navigation.scss";

const NavItem = ({ icon, text, href, activeSection }) => (
  <a
    href={href}
    className={`navbar__list-item ${
      activeSection.toLowerCase() === text.toLowerCase() ? "active" : ""
    }`}
  >
    <FontAwesomeIcon icon={icon} />
    <span>{text}</span>
  </a>
);
const Navigation = () => {
  const activeSection = useSelector((state) => state.section.activeSection);

  const navItems = [
    { icon: faUser, text: "About", href: "#about" },
    { icon: faGraduationCap, text: "Education", href: "#education" },
    { icon: faScrewdriverWrench, text: "Skills", href: "#skills" },
    { icon: faPen, text: "Experience", href: "#experience" },
    { icon: faSuitcase, text: "Portfolio", href: "#portfolio" },
    { icon: faLocationArrow, text: "Contacts", href: "#contacts" },
    { icon: faComment, text: "Feedbacks", href: "#feedbacks" },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavItem {...item} activeSection={activeSection} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Navigation;
