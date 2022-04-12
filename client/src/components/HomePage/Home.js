import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Layout from "../../Template/Layout"
import styles from "../../styles/base.module.scss";
import profile_1 from "../../assets/images/profile_1.jpg";
import "./Home.css";
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Layout>
                <div className={styles.page_container}>
                    <header className={styles.shadow_background} id="home">
                        <div className="container">
                            <h1>
                            <span className="line">Shalom!</span>
                            <span className="line">My Name is Justina</span>
                            <span className="line">
                                <span className="color">&</span> I code.
                            </span>
                            </h1>
                            <div className="buttons">
                            <a href="/projects">my portfolio</a>
                            <a href="#" className="cta">
                                Resume
                            </a>
                            </div>
                        </div>
                        <section className="profile-card">
                            <img className="profile-image" src={profile_1} alt="profile_1" />
                            <div className="profile-name">Justina</div>
                            <div className="profile-title">Software Engineer</div>
                        </section>
                    </header>
                </div>
            </Layout>
    </Fragment>
    );
}

export default Home;