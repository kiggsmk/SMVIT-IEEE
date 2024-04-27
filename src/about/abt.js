import Abouthead from "./components/abhead"
import styles from './components/about.module.css';
import Abouttext from "./components/abtext";
import VidPlayer from "./components/abvidplayer";


export default function About(){
    return(
        <div className={styles.aboutcont}>
            <Abouthead />
            <Abouttext />
            <VidPlayer/>
        
        </div>
    )
}