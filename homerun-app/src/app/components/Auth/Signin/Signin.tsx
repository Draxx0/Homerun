import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../../../api/services/auth.service";
import TokenService from "../../../../api/services/token.service";
import { IUserLogin } from "../../../../api/utils/user.utils";
import { UserContext } from "../../../contexts/UserContext";

const Signin = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState<boolean | null>(null);
  const [credentials, setCredentials] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  const handleChangeCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isValidValue = (val: string) => val.trim().length > 0;

    // transformation function
    const transformValue = (val: string) => val.trim();

    if (name in credentials && isValidValue(value)) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: transformValue(value),
      }));
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { accessToken } = await AuthServices.signin(credentials);
      TokenService.setTokenInLocalStorage(accessToken);
      const user: any = TokenService.getUserFromLocalToken();
      setUser(user);
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.error(error);
    }
  };
  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <div className="auth-form__group">
        <label htmlFor="email">Addresse email</label>
        <input
          type="email"
          name="email"
          id="email-log"
          onChange={handleChangeCredentials}
          required
        />
      </div>

      <div className="auth-form__group">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChangeCredentials}
          required
        />
      </div>

      <p className="bold">
        Mot de passe oublié ?{" "}
        <Link to="/auth/forgot-password" className="colored bold underline">
          Cliquer ici
        </Link>
      </p>
      <p className="bold">
        Vous ne posséder pas de compte ?{" "}
        <Link to="/auth/signup" className="colored bold underline">
          Crée votre compte
        </Link>
      </p>

      <input type="submit" value="Log in" className="button" />
      {error && (
        <p className="error">
          Mauvais mot de passe, ou mauvaise addresse email
        </p>
      )}
    </form>
  );
};

export default Signin;
