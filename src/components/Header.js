import logo from "../assets/images/logo-teal.svg";

const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar-center">
          <img className="logo" src={logo} alt="logo-deliveroo" />
        </div>
      </div>

      <div className="restaurant-info container">
        <div className="restaurant-info-text">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <div>
          <img
            className="restaurant-info-picture"
            src={data.restaurant.picture}
            alt="restaurant"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
