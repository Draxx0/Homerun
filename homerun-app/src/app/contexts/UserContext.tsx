import {
  createContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import TokenService from "../../api/services/token.service";
import { IUser } from "../../api/utils/user.utils";

type UserType = {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  Signout: () => void;
};

const UserContext = createContext<UserType>({
  user: null,
  setUser: () => {},
  Signout: () => {},
});

type IProps = {
  children: ReactNode;
};

const UserContextProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const Signout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const userTokenInfos: any = TokenService.getUserFromLocalToken();
      setUser(userTokenInfos);
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        Signout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
