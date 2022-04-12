import React, { Fragment } from 'react';
import Layout from "../../Template/Layout";
import { Helmet } from 'react-helmet';
import styles from "../../styles/base.module.scss"

const ContactPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <Layout>
        <div className={styles.page_container}>
          <main className={styles.shadow_background} id="contact">
            <h1>dkfjdisf</h1>
            <div>
              <form>
                <label for="name">Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label for="name">Message</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
              </form>
            </div>
          </main>
        </div>
      </Layout>
    </Fragment>
  )
}

export default ContactPage;