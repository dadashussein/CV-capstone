import PropTypes from "prop-types";
import "./expertise.scss";

const Expertise = ({ data }) => {
  return (
    <section className="expertise">
      {data.map((item, index) => (
        <article className="expertise__item" key={index}>
          <div className="expertise__item-left">
            <time className="expertise__item-left-date" dateTime={item.date}>{item.date}</time>
            <p className="expertise__item-left-company">{item.info.company}</p>
          </div>
          <div className="expertise__item-right">
            <h1>{item.info.job}</h1>
            <p>{item.info.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

Expertise.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Expertise;
