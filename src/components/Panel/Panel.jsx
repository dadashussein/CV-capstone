import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Navigation from "../Navigation/Navigation.jsx";
import PhotoBox from "../Photobox/PhotoBox.jsx";
import Button from "../Button/Button.jsx";

// icons
import { faChevronLeft, faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./panel.scss";

const Panel = ({ collapsed, onCollapse }) => {
  return (
    <aside className={`panel ${collapsed ? "collapsed" : ""}`}>
      <div className="panel-avatar">
        <PhotoBox name="Dadash" />
      </div>
      <nav>
        <Navigation />
      </nav>
      <Link to="/" className="panel__button">
        <Button icon={<FontAwesomeIcon icon={faChevronLeft} />} text="Go back" />
      </Link>
      <button onClick={onCollapse} className="collapse-btn">
        <span><FontAwesomeIcon icon={faBars} /></span>
      </button>
    </aside>
  );
};

Panel.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onCollapse: PropTypes.func.isRequired,
};

export default Panel;
