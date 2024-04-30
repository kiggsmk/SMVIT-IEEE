
import styles from './components/about.module.css';
import Abouttext from "./components/abtext.js";
import VidPlayer from "./components/abvidplayer";
import Abbottom from "./components/abbottom.js";
import React, {useEffect} from 'react';


export default function About(){
    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    return(
        <div className={styles.aboutcont}>
            <div className={styles.titlecont}>
                <div className={styles.titleheadcont}>
                    <h3 className={styles.titlehead1}>About Us</h3>
                    <h1 className={styles.titlehead2}>Pioneering & Progressive</h1>
                </div>
            </div>
            <Abouttext />
            <VidPlayer/>
            <Abbottom/>
        </div>
    )
}