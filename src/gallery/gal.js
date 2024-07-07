
import styles from './gal.module.css';
import GalCard from './galcard';
import React from 'react';
import { useState } from 'react';
import GalPop from './galpopup';



export default function Gallery(){
    const [open, setOpen] = useState(false);

    return(
        <>
        {
         open && <GalPop handleOnClick={() => {
            setOpen(false)}}/>
        }
            <div className={styles.titlecont}>
                <div className={styles.titleheadcont}>
                    <h3 className={styles.titlehead1}>Feel the Vibe</h3>
                    <h1 className={styles.titlehead2}>Gallery</h1>
                </div>
            </div>
            
            <div className={StyleSheet.galbodycont}>
                <div className={styles.galbannercont}>
                    <div className={styles.galbannerimgcont}>
                        <img src='img' alt='banner' className={styles.galbannerimg}/>
                    </div>
                </div>
                <div className={styles.galdowncont}>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                        }}/>
                    </div>
                </div>

            </div>
        </>
    )
}