import React from 'react';
import Layout from "../../Template/Layout";
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Project Page</title>
      </Helmet>
      <Layout>
        <h1>
            Project Page
        </h1>
      </Layout>
    </div>
  )
}

export default Projects