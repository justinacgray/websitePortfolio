import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss"
import { SiAboutdotme } from "react-icons/si";
import { MdContactPage } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import {
    FaHome,
    FaCreativeCommonsShare,
    FaGithub,
    FaLinkedin,

} from "react-icons/fa";



const Sidebar = () => {
    return (
        <Fragment>
            <div className={styles.navbar_container}>
                <div clasName="">
                    <ul>
                        <Link className="" to="#">Contact</Link>
                        <Link className="" to="#">Home</Link>
                        <Link className="" to="#">About Me</Link>
                        <Link classNAme="">Linked In</Link>
                        <Link className="" to="#">Resume</Link>
                        <Link className="" to="#">GitHub</Link>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar;