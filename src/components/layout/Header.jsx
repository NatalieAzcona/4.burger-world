import NavBar from "./NavBar";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Burger World</h1>
        <p className="header__subtitle">Arma tu hamburguesa perfecta</p>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
