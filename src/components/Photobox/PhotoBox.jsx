import PropTypes from "prop-types";
import ProfileImg from "../../assets/images/my_foto.jpg";
import "./photobox.scss";

const PhotoBox = ({ name, title, description }) => {
  return (
    <section className="photobox">
      <figure>
        <img src={ProfileImg} alt="Profile" className="photobox__avatar" />
      </figure>
      <div>
        <h1 className="photobox__title">{name}</h1>
        <h2 className="photobox__subtitle">{title}</h2>
        <p className="photobox__description">{description}</p>
      </div>
    </section>
  );
};

PhotoBox.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PhotoBox;
