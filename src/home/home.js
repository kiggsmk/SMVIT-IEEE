import styles from './home.module.css';
import Who from './components/who';
import Events from './components/events';



export default function Home(){
    return(
        <><div className={styles.homecont}>
             <div className={styles.titlecont}></div>
            <Who/>
            <Events/>
        </div>
        </>
    )
}