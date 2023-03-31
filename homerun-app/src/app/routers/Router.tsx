import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthPage from "../views/authView/AuthPage";
import HomeView from "../views/homeView/HomeView";
import NewsView from "../views/newsView/NewsView";
import GetProperty from "../views/getProperty/GetProperty";
import PutProperty from "../views/putProperty/PutProperty";
import ProtectedRoute from "./ProtectedRoute";
import PropertyDetails from "../views/propertyDetails/PropertyDetails";
import ProfileView from "../views/profileView/ProfileView";

const Router = () => {
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
      <Route
        path="/profile/:user"
        element={
          <ProtectedRoute>
            <ProfileView />
          </ProtectedRoute>
        }
      />
      <Route path="/auth/:connect" element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
