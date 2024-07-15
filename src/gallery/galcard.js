import React from 'react';
import styles from './gal.module.css';

export default function GalCard(props) {
  return (
    <div className={styles.galcard}>
        <div className={styles.galcardimgcont}>
            <img src={props.galimg} alt='hau' className={styles.galcardimg}/>
        </div>
        <div className={styles.galcardbutcont}>
            <button value={props.fol} onClick={props.handleOnClick} type='click' className={styles.galcardbut}>View Photos</button>
        </div>
    </div>
  )
}
