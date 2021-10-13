import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </>
  );
}

export default App;
