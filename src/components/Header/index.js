import "./style.css";
import smile from "../../img/SmilingEyes.png";
const Header = () => {
  return (
    <div className="header__content">
      <div className="div__content">
        <h1 className="h1__content">
          Olá, <strong></strong>{" "}
        </h1>
        <span className="span__content">
          Bem Vindo! <img src={smile} alt="smile" />
        </span>
      </div>
    </div>
  );
};
export default Header;
