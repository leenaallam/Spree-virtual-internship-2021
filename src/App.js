//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Toboxes from "./toboxes";
import Firstpage from "./firstpage";
import Toorders from "./Toorders";
import Notificationicon from "./notificationicon";
import Torequests from "./Torequests";

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
