import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../../../../api/services/auth.service";
import TokenService from "../../../../api/services/token.service";
import { IUser } from "../../../../api/utils/user.utils";
import { UserContext } from "../../../contexts/UserContext";

const Signup = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatar: "",
    properties: [],
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
  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthServices.signup(credentials);
      const { accessToken } = await AuthServices.signin(credentials);
      TokenService.setTokenInLocalStorage(accessToken);
      const user: any = TokenService.getUserFromLocalToken();
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="auth-form" onSubmit={handleCreateUser}>
      <div className="auth-form__group">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChangeCredentials}
          required
        />
      </div>

      <div className="auth-form__group">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleChangeCredentials}
          required
        />
      </div>

      <div className="auth-form__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
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
          min={6}
        />
      </div>

      <input type="submit" value="Sign Up" className="button" />
    </form>
  );
};

export default Signup;
