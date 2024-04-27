import Abouthead from "./components/abhead.js"
import styles from './components/about.module.css';
import Abouttext from "./components/abtext.js";
import VidPlayer from "./components/abvidplayer";
import Abbottom from "./components/abbottom.js";


export default function About(){
    return(
        <div className={styles.aboutcont}>
            <Abouthead />
            <Abouttext />
            <VidPlayer/>
            <Abbottom/>
        </div>
    )
}