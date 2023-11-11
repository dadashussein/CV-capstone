import { Link } from "react-router-dom";
import PhotoBox from "../../components/Photobox/PhotoBox.jsx";
import Button from "../../components/Button/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcDiscover } from "@fortawesome/free-brands-svg-icons";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <PhotoBox
          name="Dadash Huseynzade"
          title="Software Engineer"
          description="I'm a software developer with a passion for learning and teaching."
        />
        <Link to="/inner" className="home__link">
          <Button text="Get to know me" icon={<FontAwesomeIcon icon={faCcDiscover} />} />
        </Link>
      </div>
    </section>
  );
};

export default Home;
