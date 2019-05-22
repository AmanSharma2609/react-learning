import React, { Suspense, lazy } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import AppBar from "../src/ui-practice/appBar _ footer/appBar";
import Footer from "../src/ui-practice/appBar _ footer/footer";
import { Provider } from "react-redux";
import { store } from "./redux";

import CandidateList from "../src/ui-practice/candidate";
import Login from "../src/ui-practice/login";
import ReduxPractice from "../src/ui-practice/reduxPractice";
const Home = lazy(() => import("../src/ui-practice/home"));
const NotFound = lazy(() => import("../src/ui-practice/notFound"));

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const theme = createMuiTheme();
const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<div />}>
          <ThemeProvider theme={theme}>
            <AppBar />
          </ThemeProvider>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/Candidate" component={CandidateList} />
            <Route exact path="/Login" component={Login} />
            <Provider store={store}>
              <Route exact path="/Redux" component={ReduxPractice} />
            </Provider>
            <Route render={() => <NotFound />} />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
export default App;

// const CandidateList = lazy(() => {
//   return Promise.all([
//     import('../src/ui-practice/candidate'),
//     new Promise(resolve => setTimeout(resolve, 300))
//   ])
//   .then(([moduleExports]) => moduleExports);
// });
// const Home = lazy(() => {
//   return Promise.all([
//     import('../src/ui-practice/home'),
//     new Promise(resolve => setTimeout(resolve, 300))
//   ])
//   .then(([moduleExports]) => moduleExports);
// });
