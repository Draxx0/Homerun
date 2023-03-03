import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="pre-footer">
        <img src="./assets/images/footer-img.png" alt="footer illustration" />
        <h4>
          Start buying or listing
          <br /> properties with <span className="colored">Homerun</span>{" "}
        </h4>
      </div>
      <div className="footer-wrapper">
        <div className="column">
          <div className="row alignCenter">
            <img src="./assets/logos/white-logo.svg" alt="white logo" />
            <span>Homerun</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="column">
          <span>Company</span>
          <ul>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="">Terms & Conditions</Link>
            </li>
            <li>
              {" "}
              <Link to="">User Guide</Link>
            </li>
            <li>
              {" "}
              <Link to="">Become a Business</Link>
            </li>
            <li>
              {" "}
              <Link to="">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="column">
          <span>Join our newsletter</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>

          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="votre email ici..."
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
