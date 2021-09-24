//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Toboxes from "./components/Boxescomponents/toboxes";
import Firstpage from "./components/firstpage";
import Toorders from "./components/Orderscomponents/Toorders";
import Notificationicon from "./icons/notificationicon";
import Torequests from "./components/Requestscomponents/Torequests";

function App() {
  return (
    <Router>
      <div className="Allcontent">
        <div className="changablecontent">
          <div className="topbar"></div>
          <Notificationicon />

          <Switch>
            <Route exact path="/">
              <Firstpage />
            </Route>
            <Route exact path="/requests">
              <Torequests />
            </Route>
            <Route exact path="/orders">
              <Toorders />
            </Route>
            <Route exact path="/boxes">
              <Toboxes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
