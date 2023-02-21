import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AuthPage from "../views/auth/AuthPage";
import Home from "../views/home/Home";

const Router = () => {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {!user && <Route path="/auth" element={<AuthPage />} />}
    </Routes>
  );
};

export default Router;
