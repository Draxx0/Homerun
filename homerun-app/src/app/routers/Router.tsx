import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AuthPage from "../views/authView/AuthPage";
import HomeView from "../views/homeView/HomeView";
import NewsView from "../views/newsView/NewsView";
import GetProperty from "../views/getProperty/GetProperty";
import PutProperty from "../views/sellView/PutProperty";
import ProtectedRoute from "./ProtectedRoute";
import PropertyDetails from "../views/propertyDetails/PropertyDetails";

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
      <Route
        path="/put-property"
        element={
          <ProtectedRoute>
            <PutProperty />
          </ProtectedRoute>
        }
      />
      <Route path="/property-details/:id" element={<PropertyDetails />}></Route>
      <Route path="/news" element={<NewsView />} />
      <Route path="/auth/:connect" element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
