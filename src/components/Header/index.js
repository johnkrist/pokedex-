import "./style.css";
import smile from "../../img/SmilingEyes.png";
const Header = ({ setModal, username }) => {
  return (
    <div className="header__content">
      <div className="div__content">
        <h1 className="h1__content">
          Olá, <strong className="username">{username}</strong>
        </h1>
        <span className="span__content">
          Bem Vindo(a)! <img src={smile} alt="smile" />
        </span>
      </div>
    </div>
  );
};
export default Header;
