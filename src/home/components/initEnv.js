
import styles from './components.module.css';
import mvitieeelogo from'./mvitieeelogo-removebg-preview.png';
import ieeelogo from './ieee_logo-removebg-preview.png';
import React from 'react';
import { useState,useEffect } from 'react';







function LoadEnvelope() {
  const [welcome, setWelcomeClass] = useState(styles.welcome);

  useEffect(() => {
    const handleKeyPress = () => {
      setWelcomeClass(` ${styles.gayab}`);
    };

    // {window.addEventListener('keydown', handleKeyPress)} || 
    setTimeout(handleKeyPress, 6000);
    // clearTimeout(myTimeout);

    // return () => {
    //   window.removeEventListener('keydown', handleKeyPress);
    // };
  }, []);


  
 
  return (
    <div className={welcome}>

      <div className={styles.envCont}>
        <><div className={styles.textCont}><h2 className={styles.envText}>Where the World’s Largest Professional Community Meet</h2></div>
          <div className={styles.imgCont}>
            <div className={styles.ieeelogo}><img className={styles.img} src={ieeelogo} alt="ieee logo" /></div>
            <div className={styles.mvitieeelogo}><img className={styles.img} src={mvitieeelogo} alt="mvit ieee logo" /></div>
          </div>
          <div className={styles.botenvtext}>IEEE</div></>
      </div>

    </div>

  
      

    
 
  
  )
 
}




export default LoadEnvelope;
