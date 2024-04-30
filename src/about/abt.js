import Abouthead from "./components/abhead.js"
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
            <Abouthead />
            <Abouttext />
            <VidPlayer/>
            <Abbottom/>
        </div>
    )
}