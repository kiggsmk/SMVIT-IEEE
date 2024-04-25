import styles from './home.module.css';
import Title from './title.js';



export default function Home(){
    return(
        <><div className={styles.homecont}>
             <div className={styles.titlecont}><Title/></div>
        </div>
        </>
    )
}