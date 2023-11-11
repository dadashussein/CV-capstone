import PropTypes from "prop-types";
import "./box.scss";

const Box = ({ title, children, id }) => {
  return (
    <div id={id} className="box-component">
      <h1 className="box-component__title">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  id: PropTypes.string.isRequired,
};

export default Box;
