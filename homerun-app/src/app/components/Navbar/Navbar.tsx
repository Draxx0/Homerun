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
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/properties">Properties</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/sell">Sell</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/find-agents">Find Agents</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/news">News</NavLink>
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
            <button className="button" onClick={Signout}>
              Log out
            </button>
          </div>
        ) : (
          <div className="row gap-2">
            <div className="auth-button">
              <Link to="/auth/signup" className="button">
                Register
              </Link>
            </div>
            <div className="auth-button">
              <Link to="/auth/signin" className="button">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
