import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-container">
          <img
            src="./assets/logos/Logo.svg"
            alt="Logo Homerun"
            className="logo-container__logo"
          />
          <span className="logo-container__name">Homerun</span>
        </div>

        <ul className="links-list">
          <li className="links-list__item">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/buy">Buy</NavLink>
          </li>

          <li className="links-list__item">
            <NavLink to="/rent">Rent</NavLink>
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
          <div className="user-container">
            <img
              src="./assets/icons/user.svg"
              alt="User"
              className="user-container__icon"
            />
            <span className="user-container__name">{}</span>
          </div>
        ) : (
          <div className="auth-button">
            <NavLink to="/login" className="button">
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
