import styles from './blog.module.css';
import { useEffect } from 'react';
export default function Blog(){
    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    return(
        <div className={styles.titlecont}>
                <div className={styles.titleheadcont}>
                    <h3 className={styles.titlehead1}>Spread the Word!</h3>
                    <h1 className={styles.titlehead2}>Blog Post</h1>
                    <h3 className={styles.titlehead1}>Coming Soon</h3>
                </div>
        </div>
    )
}