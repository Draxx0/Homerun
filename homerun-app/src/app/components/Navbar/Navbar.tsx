import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Logo from "../../assets/logos/Logo.svg";

const Navbar = () => {
  const { user, Signout } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  return (
    <nav className={isScrolled ? "nav-active" : ""}>
      <div className="nav-wrapper">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo Homerun" className="logo-container__logo" />
          <span className="logo-container__name">Homerun</span>
        </div>

        <ul className="links-list">
          <li className="links-list__item">
            <NavLink to="/">Accueil</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/properties">Propriétés</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/find-agents">Agents</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/news">Actualités</NavLink>
          </li>
        </ul>

        {user ? (
          <div className="row gap-2 alignCenter">
            <div className="user-container">
              <img
                src={user.avatar}
                alt="User"
                className="user-container__icon"
              />
              <span className="user-container__name">
                Bonjour <span className="colored bold">{user.firstName}</span>
              </span>
            </div>
            <Link to="/" className="black-button">
              Mettre ma propriété sur <span className="colored bold">Homerun</span>
            </Link>
            <button className="button" onClick={Signout}>
              Déconnexion
            </button>
          </div>
        ) : (
          <div className="row gap-2">
            <div className="auth-button">
              <Link to="" className="black-button">
                Mettre ma propriété sur <span className="colored bold">Homerun</span>
              </Link>
            </div>
            <div className="auth-button">
              <Link to="/auth/signin" className="button">
                Se connecter
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
