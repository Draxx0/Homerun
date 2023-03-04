import { useLocation } from "react-router-dom";
import Signin from "../../components/Auth/Signin/Signin";
import Signup from "../../components/Auth/Signup/Signup";

const AuthPage = () => {
  const location = useLocation();
  return (
    <div className="auth">
      <div className="row alignCenter">
        <div className="column">
          <h1>
            {location.pathname === "/auth/signin" ? "Sign In" : "Sign Up"} to{" "}
            <span className="colored">Homerun</span>
          </h1>

          {location.pathname === "/auth/signin" ? <Signin /> : <Signup />}
        </div>

        <img src="./assets/images/vector.png" alt="auth background" />
      </div>
    </div>
  );
};

export default AuthPage;
