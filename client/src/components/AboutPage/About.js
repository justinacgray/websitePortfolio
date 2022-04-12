import React from 'react';
import Layout from "../../Template/Layout";
import { Helmet } from 'react-helmet';
import styles from "../../styles/base.module.scss"
import { Link } from 'react-scroll';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <Layout>
        <div className={styles.page_container}>
          <main className={styles.shadow_background} id="about">
            <section className='aboutMe'>
              <h2>Who's Justina?</h2>
              <div>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </section>
            <section className='aboutMe'>
              <h2>Interests</h2>
              <div>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </section>
            <section className='aboutMe'>
              <h2>Background</h2>
              <div>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </section>
            
          </main>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage