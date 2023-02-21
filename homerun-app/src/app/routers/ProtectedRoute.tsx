import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { ReactNode, FC } from "react";

type IProps = {
  children: ReactNode;
};

const ProtectedRoute: FC<IProps> = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) return <Navigate to="/auth" />;

  return <>children</>;
};

export default ProtectedRoute;
