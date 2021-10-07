import Routes from "./components/Routes";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <Routes />
    </Router>
   
  );
}

export default App;
