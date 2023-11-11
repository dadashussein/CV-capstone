import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  return (
    <button className="button">
      <span className="button__icon">{props.icon}</span>
      <span className="button__text">{props.text}</span>
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};

export default Button;
