import styles from './about.module.css';
import bg from './abtheadbg.avif'



export default function Abouthead(){
    return(
        <div className={styles.headcont}>
            <img className={styles.abbgimg} alt='about us' src={bg}/>
            <h3 className={styles.headtext1}>About Us</h3>
            <h1 className={styles.headtext2}>Something & Something</h1>
            <div className={styles.trapezoid}></div>
        </div>
       
        )
}
