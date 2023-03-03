import "./app/sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/routers/Router";
import Layout from "./app/layouts/Layout";
import { UserContextProvider } from "./app/contexts/UserContext";
import { PropertiesContextProvider } from "./app/contexts/PropertiesContext";

function App() {
  return (
    <UserContextProvider>
      <PropertiesContextProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </PropertiesContextProvider>
    </UserContextProvider>
  );
}

export default App;
