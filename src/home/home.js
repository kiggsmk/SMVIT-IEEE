import styles from './home.module.css';
import Who from './components/who';
import Events from './components/events';
import Execom from './components/execom';
import React, {useEffect} from 'react';



export default function Home(){
    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    return(
        <><div className={styles.homecont}>
            <div className={styles.titlecont}>
                <div className={styles.titleheadcont}>
                    <h3 className={styles.titlehead1}>Student Branch</h3>
                    <h1 className={styles.titlehead2}>IEEE | MVIT</h1>
                </div>
            </div>
            <Who/>
            <Events/>
            <Execom/>
        </div>
        </>
    )
}