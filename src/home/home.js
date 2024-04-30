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
             <div className={styles.titlecont}></div>
            <Who/>
            <Events/>
            <Execom/>
        </div>
        </>
    )
}