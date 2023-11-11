import { addressData } from "../../utils/data";
import "./_address.scss";

const Address = () => {
  return (
    <address className="address">
      <ul className="address__list">
        {addressData.map((element) => (
          <li className="address__item" key={element.id}>
            <div className="address__item--icon">
              <i className={element.icon}></i>
            </div>

            <div className="address__item--details">
              <p className="address__item--details--title">{element.title}</p>
              <a className="address__item--details--text" href={element.href}>
                {element.text}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </address>
  );
};

export default Address;
