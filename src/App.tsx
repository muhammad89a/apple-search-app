import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { useStyles } from "./App-styles";
import {  Loader } from "./components";
import { history } from "./redux/configureStore";
import { withTheme } from "./withTheme";

const MainPage = lazy(() => import("./pages/MainPage"));

function Routes() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Switch>
        <Route exact={true} path="/" component={MainPage} />
        <Route exact={true} path="/main" component={MainPage} />
      </Switch>
    </div>
  );
}

function App() {
  const classes = useStyles();
  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
	        <Routes />
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default withTheme(App);
