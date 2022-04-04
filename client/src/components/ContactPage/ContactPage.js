import React from 'react';
import Layout from "../../Template/Layout";
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <Layout>
        <h1>
            Contact Page
        </h1>
      </Layout>
    </div>
  )
}

export default ContactPage;