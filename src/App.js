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
    const [isAuth, setIsAuth] = useState(true);

      return (
          <Router>
              <div>
                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                  <Switch>
                      <Route
                          path="/wedding"
                          render={(props) =>
                              isAuth ? (
                                  <Homepage {...props} setIsAuth={setIsAuth} />
                              ) : (
                                  <Redirect to="/password" />
                              )
                          }
                      />
                      <Route
                          path="/password"
                          render={(props) =>
                              !isAuth ? (
                                  <Password {...props} setIsAuth={setIsAuth} />
                              ) : (
                                  <Redirect to="/wedding" />
                              )
                          }
                      />
                  </Switch>
              </div>
          </Router>
      );
}
