import {
  createContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { IUser } from "../../api/utils/user.utils";

type UserType = {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
};

const UserContext = createContext<UserType>({
  user: null,
  setUser: () => {},
});

type IProps = {
  children: ReactNode;
};

const UserContextProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
