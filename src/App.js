import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Projects from "./components/pages/Projects";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
