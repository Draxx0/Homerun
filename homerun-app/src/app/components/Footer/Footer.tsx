import { Link } from "react-router-dom";
import footerImage from "../../assets/images/footer-img.png";
import Logo from "../../assets/logos/white-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="pre-footer">
        <img src={footerImage} alt="footer img" />
        <h4>
          Commencez à acheter ou à inscrire
          <br /> des propriétés avec <span className="colored">Homerun</span>{" "}
        </h4>
      </div>
      <div className="footer-wrapper">
        <div className="column">
          <div className="row alignCenter">
            <img src={Logo} alt="white logo" />
            <span>Homerun</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="column">
          <span>Entreprise</span>
          <ul>
            <li>
              <Link to="">A notre sujet</Link>
            </li>
            <li>
              {" "}
              <Link to="">Conditions générales</Link>
            </li>
            <li>
              {" "}
              <Link to="">Guide d'utilisation</Link>
            </li>
            <li>
              {" "}
              <Link to="">Devenir une entreprise</Link>
            </li>
            <li>
              {" "}
              <Link to="">Nous contacter</Link>
            </li>
          </ul>
        </div>

        <div className="column">
          <span>Rejoindre notre newsletter</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>

          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email-newsletter"
              placeholder="votre email ici..."
            />
            <button>S'inscrire</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
