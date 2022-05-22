import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import './App.css';
import Homepage from "./Screen/Homepage";
import Password from "./Screen/Password";

export default function App() {
    const [isAuth, setIsAuth] = useState(false);

      return (
          <Router>
              <div>
                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                  <Switch>
                      <Route
                          exact
                          path="/"
                          render={(props) =>
                              isAuth ? (
                                  <Homepage {...props} setIsAuth={setIsAuth} />
                              ) : (
                                  <Redirect to="/password" />
                              )
                          }
                      />
                      <Route
                          exact
                          path="/password"
                          render={(props) =>
                              !isAuth ? (
                                  <Password {...props} setIsAuth={setIsAuth} />
                              ) : (
                                  <Redirect to="/" />
                              )
                          }
                      />
                  </Switch>
              </div>
          </Router>
      );
}
