import PropTypes from "prop-types";
import "./info.scss";

const Info = ({ text, title }) => {
  return (
    <div className="info">
      <h1 className="info__title">{title}</h1>
      <p className="info__text">{text}</p>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Info;
