import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MarinaInputForm from "./components/MarinaInputForm";
import MarinaPage from "./components/MarinaPage"
import BrowseMarinas from "./components/BrowseMarinas"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/marinas">
            <BrowseMarinas />
          </Route>
          <Route exact path="/marinas/new">
            <MarinaInputForm />
          </Route>
          <Route path="/marinas/:marinaId">
            <MarinaPage />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
