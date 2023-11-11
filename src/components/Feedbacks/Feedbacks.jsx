import { feedbackData } from "../../utils/data";
import { Link } from "react-router-dom";
import "./feedbacks.scss";

const Feedbacks = () => {
  return (
    <section className="feedback">
      {feedbackData.map((item, index) => (
        <article className="feedback__item" key={index}>
          <div className="feedback__item--content">
            <p>{item.feedback}</p>
          </div>
          <div className="feedback__item--name">
            <figure>
              <img src={item.reporter.photoUrl} alt={item.reporter.name} />
            </figure>
            <p>{item.reporter.name}</p>
            <footer>
              <Link to={item.reporter.citeUrl}>More info</Link>
            </footer>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Feedbacks;
