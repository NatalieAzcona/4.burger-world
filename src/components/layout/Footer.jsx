import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Burger World | {new Date().getFullYear()} | Hecho con React
      </p>
    </footer>
  );
};

export default Footer;
