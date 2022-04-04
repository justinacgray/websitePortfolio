import React, { Fragment } from "react";
import Layout from "../../Template/Layout"
import Helmet from "react-helmet";

const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Layout>
                <h1>
                    HomePage
                </h1>
            </Layout>
    </Fragment>
    );
}

export default HomePage