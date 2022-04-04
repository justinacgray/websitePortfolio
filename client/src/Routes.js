import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage"
import Contact from "./components/ContactPage/ContactPage";
import ProjectsPage from "./components/Projects/ProjectsPage";


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route component={HomePage} exact path="/" />
                <Route component={About} exact path="/about/" />
                <Route component={Contact} exact path="/contact/" />
                <Route component={ProjectsPage} exact path="/projects/" />
            </Switch>
        </div>
    );
};

export default Routes;