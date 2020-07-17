import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Mainpage from "./pages/index";
import StudentListPage from "./pages/studnetlist";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/studentlist" component={StudentListPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
