
import styles from './gal.module.css';
import GalCard from './galcard';
import React from 'react';
import { useState } from 'react';
import GalPop from './galpopup';




export default function Gallery(){
    const [open, setOpen] = useState(false);
    const [altk,setAltk] = useState(false);
    const [exemeet, setExemeet] = useState(false);
    const [logodes, setLogodes] = useState(false);
    const [ori, setOri] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [tcday, setTcday] = useState(false);
    const [tsv, settsv] = useState(false);
    var i;
    if (altk){
        i=0;
    }
    else if(exemeet){
        i=6;
    }
    else if(logodes){
        i=8;
    }
    else if(ori){
        i=10;
    }
    else if(photo){
        i=14;
    }
    else if(tcday){
        i=10;
    }
    else if(tsv){
        i=26;
    }

    return(
        <>
        {
         open && <GalPop handleOnClick={() => {
            setOpen(false)}}
            indx={i}
            />
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
                            setAltk(true)
                        }}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(true)
                        }}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(true)
                        }}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(true)
                        }}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(true)
                        }}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(true)
                        }}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(true)
                        }}
                        />

                    </div>
                </div>

            </div>
        </>
    )
    
}
