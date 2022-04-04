import React, { Fragment } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = (props) => {
    const { children } = props;
    return (
        <div style={{display: "flex"}}>
            <Sidebar />
            {children}
        </div>
    );
};

export default Layout;