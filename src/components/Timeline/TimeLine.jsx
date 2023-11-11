import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Info from "../Info/Info.jsx";
import { useDispatch, useSelector } from "react-redux";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { getEducation } from "../../store/features/education/educationSlice.js";
import "./timeLine.scss";

const TimeLine = () => {
  const { education, isLoading, error } = useSelector(
    (state) => state.education
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEducation());
  }, [dispatch]);

  return (
    <section className="timeline">
      {isLoading && <FontAwesomeIcon icon={faSync} className="timeline__loading" />}

      <div className="timeline__content">
        {error ? (
          <div className="error-message">
            Something went wrong; please review your server connection!
          </div>
        ) : (
          education?.map((event, index) => (
            <article className="timeline__container" key={index}>
              <div className="timeline__container--dateline">
                <time className="timeline__container--dateline--event-date">
                  {event.date}
                </time>
                <div className="timeline__container--dateline--line"></div>
              </div>
              <Info title={event.title} text={event.description} />
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default TimeLine;
