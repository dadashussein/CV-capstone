import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./portfolio.scss";


const Portfolio = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/portfolio");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }
  , []);

  const displayData = useMemo(() => {
    if (activeTab === "all") {
      return data;
    } else {
      return data.filter((item) => item.category === activeTab);
    }
  }, [data, activeTab]);

  return (
    <section className="portfolio-container">
      <ul  className="tabs">
        <li
          className={`tabs-item ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </li>
        <li
          className={`tabs-item ${activeTab === "ui" ? "active" : ""}`}
          onClick={() => setActiveTab("ui")}
        >
          UI
        </li>
        <li
          className={`tabs-item ${activeTab === "code" ? "active" : ""}`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </li>
      </ul>

      <section className="portfolio-box">
        {displayData.map((item) => (
          <div key={item.id} className="portfolio-box__item">
            <img className="portfolio-box__item-img" src={item.img} alt={item.title} />
            <div className="portfolio-box__item-overlay">
              <h2 className="portfolio-box__item-overlay-title">{item.title}</h2>
              <p className="portfolio-box__item-overlay-desc">{item.description}</p>
              <Link className="portfolio-box__item-overlay-button" to={item.url} target="_blank" rel="noopener noreferrer">
                View Source
              </Link>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
