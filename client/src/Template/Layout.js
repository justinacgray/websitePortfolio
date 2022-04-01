import React, { Fragment } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    );
};

export default Layout;