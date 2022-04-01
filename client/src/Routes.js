import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
// import About from "./Components/About/About";
import HomePage from "./components/HomePage/HomePage"
// import Contact from "./Components/Contact/Contact";
// import Register from "./Components/Reg_LogIn/Register";


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route component={HomePage} exact path="/" />
                {/* <Route component={About} exact path="/about/" /> */}
                {/* <Route component={Contact} exact path="/contact/" /> */}
                {/* <Route component={Register} exact path="/register/" /> */}
            </Switch>
        </div>
    );
};

export default Routes;