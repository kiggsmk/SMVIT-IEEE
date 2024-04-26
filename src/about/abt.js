import Abouthead from "./components/abhead"
import styles from './components/about.module.css';
import Abouttext from "./components/abtext";


export default function About(){
    return(
        <div className={styles.aboutycont}>
            <Abouthead />
            <Abouttext />
        
        </div>
    )
}