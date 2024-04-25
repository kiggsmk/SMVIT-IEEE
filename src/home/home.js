import styles from './home.module.css';
import Who from './components/who';



export default function Home(){
    return(
        <><div className={styles.homecont}>
             <div className={styles.titlecont}></div>
            <Who/>
        </div>
        </>
    )
}