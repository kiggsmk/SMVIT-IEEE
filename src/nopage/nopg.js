import styles from './nopage.module.css';
import { useEffect } from 'react';
export default function NoPage(){
    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    return(
    <div className={styles.titlecont}>
        <div className={styles.titleheadcont}>
            <h3 className={styles.titlehead1}>You're lost buddy</h3>
            <h1 className={styles.titlehead2}>Page Not found</h1>
        </div>
    </div>
    )
}