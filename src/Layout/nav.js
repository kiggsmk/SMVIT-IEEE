import styles from './nav.module.css';
import {Link, Outlet } from "react-router-dom";
import logo from './logo-mvit-ieee.png';
import profile from './profileicon-removebg-preview.png';



export const Nav = () => {
    return (
        

    <><div className={styles.nav}>
            <nav className={styles.logo}>
                <img alt="logo" className={styles.logoimg} src={logo} />

            </nav>

            <nav className={styles.listcont}>
                <ul className={styles.list}>
                    <li className={styles.listitem}><p><Link to="/home">Home</Link></p></li>
                    <li className={styles.listitem}><p><Link to="/about">About Us</Link></p></li>
                    <li className={styles.listitem}><p><Link to="/socaff">Societies & Affinities</Link></p></li>
                    <li className={styles.listitem}><p><Link to="/events">Events</Link></p></li>
                    <li className={styles.listitem}><p><Link to="/membership">Membership</Link></p></li>
                    <li className={styles.listitem}><p><Link to="/gallery">Gallery</Link></p></li>
                    <li className={styles.listitem}><p><Link to="/blog">Blog</Link></p></li>

                </ul>
            </nav>

            <nav className={styles.profileicon}>
                <img alt='profile' className={styles.iconimg} src={profile} />
            </nav>

        </div><Outlet /></>
   
            
    );
};




export default Nav;

