
import styles from './gal.module.css';
import GalCard from './galcard';
import React from 'react';
import { useState , useEffect } from 'react';
import GalPop from './galpopup';
import banner from './gallerythumbnail/ttsv.jpeg';
import tph from './gallerythumbnail/tphc.jpeg';
import tori from './gallerythumbnail/tori.jpeg';
import al from './gallerythumbnail/altk.jpg';
import lng from './gallerythumbnail/lng.jpeg';
import ttd from './gallerythumbnail/ttd.jpeg';
import ldes from './gallerythumbnail/lodes.jpg';



export default function Gallery(){
    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    const [open, setOpen] = useState(false);
    const [altk,setAltk] = useState(false);
    const [exemeet, setExemeet] = useState(false);
    const [logodes, setLogodes] = useState(false);
    const [ori, setOri] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [tcday, setTcday] = useState(false);
    const [tsv, setTsv] = useState(false);
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

    const handleBannerClick=() => {
        setOpen(true);
        setTsv(true);
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
                        <img src={banner} alt='banner' className={styles.galbannerimg}/>
                    </div>
                    <div className={styles.galbannerbutcont}>
                        <button onClick={handleBannerClick} type='click' className={styles.galbannerbut}>View Photos</button>
                    </div>
                </div>
                <div className={styles.galdowncont}>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(true)
                            setExemeet(false)
                            setLogodes(false)
                            setOri(false)
                            setPhoto(false)
                            setTcday(false)
                            setTsv(false)
                        }}                       
                        galimg={al}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(false)
                            setExemeet(true)
                            setLogodes(false)
                            setOri(false)
                            setPhoto(false)
                            setTcday(false)
                            setTsv(false)
                        }}
                        galimg={lng}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(false)
                            setExemeet(false)
                            setLogodes(true)
                            setOri(false)
                            setPhoto(false)
                            setTcday(false)
                            setTsv(false)
                        }}
                        galimg={ldes}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(false)
                            setExemeet(false)
                            setLogodes(false)
                            setOri(true)
                            setPhoto(false)
                            setTcday(false)
                            setTsv(false)
                        }}
                        galimg={tori}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(false)
                            setExemeet(false)
                            setLogodes(false)
                            setOri(false)
                            setPhoto(true)
                            setTcday(false)
                            setTsv(false)
                        }}
                        galimg={tph}
                        />

                    </div>
                    <div className={styles.galcardcont}>
                        <GalCard handleOnClick={() => {
                            setOpen(true)
                            setAltk(false)
                            setExemeet(false)
                            setLogodes(false)
                            setOri(false)
                            setPhoto(false)
                            setTcday(true)
                            setTsv(false)
                        }}
                        galimg={ttd}
                        />

                    </div>
                    
                </div>

            </div>
        </>
    )
    
}
