import "./app/sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/routers/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
