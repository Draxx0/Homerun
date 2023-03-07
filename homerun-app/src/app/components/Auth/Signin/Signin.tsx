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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email-log"
          onChange={handleChangeCredentials}
          required
        />
      </div>

      <div className="auth-form__group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChangeCredentials}
          required
        />
      </div>

      <Link to="/" className="colored bold underline">
        Forgot your password ? reset it here
      </Link>

      <input type="submit" value="Log in" className="button" />
      {error && <p className="error">Invalid password or email</p>}
    </form>
  );
};

export default Signin;
