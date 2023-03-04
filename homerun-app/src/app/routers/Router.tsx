import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AuthPage from "../views/authView/AuthPage";
import BuyView from "../views/buyView/BuyView";
import FindAgentsView from "../views/findAgentsView/FindAgentsView";
import HomeView from "../views/homeView/HomeView";
import NewsView from "../views/newsView/NewsView";
import RentView from "../views/rentView/RentView";
import SellView from "../views/sellView/SellView";

const Router = () => {
  const { user } = useContext(UserContext);

  console.log("user", user);
  
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/buy" element={<BuyView />} />
      <Route path="/rent" element={<RentView />} />
      <Route path="/sell" element={<SellView />} />
      <Route path="/find-agents" element={<FindAgentsView />} />
      <Route path="/news" element={<NewsView />} />
      <Route path="/auth/:connect" element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
