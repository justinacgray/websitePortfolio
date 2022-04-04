import React from 'react';
import Layout from "../../Template/Layout";
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <Layout>
        <h1>
            About Page
        </h1>
      </Layout>
    </div>
  )
}

export default AboutPage