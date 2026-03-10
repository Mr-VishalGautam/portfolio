import AppRoutes from "./components/Routes";
import { HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <AppRoutes />
    </HashRouter>
  );
}

export default App;