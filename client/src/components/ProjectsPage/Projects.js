import React, {Fragment} from 'react';
import Layout from "../../Template/Layout";
import { Helmet } from 'react-helmet';
import styles from "../../styles/base.module.scss"
import "./Projects.css"

const Projects = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Project Page</title>
      </Helmet>
      <Layout>
      <div className={styles.page_container}>
        <main className={styles.shadow_background} id="projects">
              Projects
        </main>
      </div>
      </Layout>
    </Fragment>
  )
}

export default Projects