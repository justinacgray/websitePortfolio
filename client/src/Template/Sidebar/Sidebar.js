import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss"
import { SiAboutdotme } from "react-icons/si";
import { MdContactPage, MdOutlineLogout } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import {FcProcess} from "react-icons/fc";
import {
    FaHome,
    FaGithub,
    FaLinkedin,
    FaTimes,
} from "react-icons/fa";
// have resume in About Me

const Sidebar = () => {
const [nav, setnav] = useState(false);

const NavBarLink = ({ url, icon, description }) => {
const checkWindowSize = () => {
    if (window.innerWidth < 1024) setnav(!nav);
};
return (
    <li className={styles.li_navlink}>
    <NavLink
        to={`${url}`}
        onClick={() => checkWindowSize()}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
    >
        {icon}
        <span className={styles.description}>{description}</span>
    </NavLink>
    </li>
);
};

return (
    <div
        className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : undefined
        }`}
    >
    {/* TEST     */}
    <div className={styles.test}>
    <button
        onClick={() => {
        setnav(!nav);
        }}
    >
        PRESS ME
    </button>
    </div>

    <nav className={nav ? undefined : styles.nav_small}>
    {/* LOGO */}
    <div className={styles.logo}>
        <FcProcess className={styles.logo_icon} />
        <FaTimes
        className={styles.mobile_cancel_icon}
        onClick={() => setnav(!nav)}
        />
    </div>

    {/* SUBMENU */}
    <ul className={styles.menu_container}>
        {/* FIRST CATEGORY */}
        <span className={styles.categories}>
        {nav ? "Pages" : <BsThreeDots />}
        </span>

        <NavBarLink
        url="/"
        icon={<FaHome />}
        description="Home"
        />

        <NavBarLink
        url="/about/"
        icon={<SiAboutdotme />}
        description="About Me"
        />

        <NavBarLink
        url="/projects"
        icon={<CgFileDocument />}
        description="Projects"
        />

        <NavBarLink
        url="/contact"
        icon={<MdContactPage />}
        description="Contact"
        />

        {/* SECOND CATEGORY */}
        <span
        className={`${styles.categories} 
        ${styles.second_category}`}
        >
        {nav ? "More" : <BsThreeDots />}
        </span>
        <a target= "_blank" href="https://linkedin.com/in/justina-gray"> 
        <FaLinkedin className={styles.socialMedia} />
        </a>
        <a target= "_blank" href="https://github.com/justinacgray"> 
        <FaGithub className={styles.socialMedia}/>
        </a>
    </ul>

    {/* LOGOUT BUTTON */}
    <div
        className={styles.btn_logout}
        onClick={() => {
        setnav(!nav);
        }}
    >
        <MdOutlineLogout />
    </div>
    {/* ADD BACKGROUND FOR MOBILE */}
    </nav>
</div>
);
};

export default Sidebar;