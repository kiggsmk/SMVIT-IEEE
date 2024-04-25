import styles from './nav.module.css';
import {NavLink, Outlet } from "react-router-dom";
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
                <NavLink className={styles.navlink} to="/home"><li className={styles.listitem}><p>Home</p></li></NavLink>
                <NavLink className={styles.navlink} to="/about"><li className={styles.listitem}><p>About Us</p></li></NavLink>
                <NavLink className={styles.navlink} to="/socaff"><li className={styles.listitem}><p>Societies & Affinities</p></li></NavLink>
                <NavLink className={styles.navlink} to="/events"><li className={styles.listitem}><p>Events</p></li></NavLink>
                <NavLink className={styles.navlink} to="/membership"><li className={styles.listitem}><p>Membership</p></li></NavLink>
                <NavLink className={styles.navlink} to="/gallery"><li className={styles.listitem}><p>Gallery</p></li></NavLink>
                <NavLink className={styles.navlink} to="/blog"><li className={styles.listitem}><p>Blog</p></li></NavLink>

                </ul>
            </nav>

            <nav className={styles.profileicon}>
                <img alt='profile' className={styles.iconimg} src={profile} />
            </nav>

        </div><Outlet /></>
   
            
    );
};




export default Nav;

