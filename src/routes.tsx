import {
  HashRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "./screens/home/home";
import User from "./screens/user/user";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Switch>
    </Router>
  );
};

export default Routes;
