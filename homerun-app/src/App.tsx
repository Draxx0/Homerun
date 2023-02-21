import "./app/sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/routers/Router";
import Layout from "./app/layouts/Layout";
import { UserContextProvider } from "./app/contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
