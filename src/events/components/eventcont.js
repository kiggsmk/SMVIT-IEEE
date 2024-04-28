import styles from './event.module.css';
import React, { useState } from 'react';

export default function Evcont(props){
    const [hidden, setHidden] = useState(true);

    return(
        <div onClick={() => setHidden(!hidden)} className={(hidden ? styles.evcardparent : styles.evcardparentfull)}>
            <div className={(hidden ? styles.upevcont : styles.upevcontfull)}>
                <div className={styles.upevimgcont}>
                    <img className={styles.upevimg} alt={props.name}src={props.evimg1}/>
                </div>
                <div className={styles.contentcont}>
                    <div className={styles.upevheadcont}>
                        <h1 className={styles.upevhead}>{props.name}</h1>
                    </div>
                    <div className={styles.upevdatecont}>
                        <p className={styles.upevdate}>{props.date}</p>
                    </div>
                    <div className={styles.upevdesccont}>
                        <p className={styles.upevdesc}>{props.evbrief}</p>
                    </div>
                </div>    
            </div>
            <div className={styles.downevcont}>
                <div className={styles.evextracont}>
                    <div className={styles.downevtextcont}>
                        <p className={styles.downevtext}>{props.evdesc}</p>
                    </div>
                    <div className={styles.downevimgcont}>
                        <img alt={props.name} className={styles.downevimg} src={props.evimg2}/>
                    </div>
                </div>
                <div className={styles.doddaevimgcont}>
                    <img alt={props.name} className={styles.doddaevimg} src={props.evimg3}/>
                </div>
            </div>


        </div>
    )
}