import { useContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AuthPage from "../views/authView/AuthPage";
import BuyView from "../views/getProperty/GetProperty";
import FindAgentsView from "../views/findAgentsView/FindAgentsView";
import HomeView from "../views/homeView/HomeView";
import NewsView from "../views/newsView/NewsView";
import SellView from "../views/sellView/SellView";
import { useEffect } from "react";
import GetProperty from "../views/getProperty/GetProperty";

const Router = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/properties" element={<GetProperty />} />
      <Route path="/sell" element={<SellView />} />
      <Route path="/find-agents" element={<FindAgentsView />} />
      <Route path="/news" element={<NewsView />} />
      <Route path="/auth/:connect" element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
