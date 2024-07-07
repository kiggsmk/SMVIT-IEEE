import React from 'react'
import styles from './gal.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import close from './closeicon.png';
import ial1 from './media/alumnitalk/i1.jpg';
import ial2 from './media/alumnitalk/i2.jpg';
import ial3 from './media/alumnitalk/i3.jpg';
import ial4 from './media/alumnitalk/i4.jpg';
import ial5 from './media/alumnitalk/i5.jpg';
import ial6 from './media/alumnitalk/i6.jpg';


const images = [
  ial1, ial2, ial3, ial4, ial5, ial6
];




export default function GalPop(props) {
  return (
    <>
    <div className={(styles.galpopcontopen)}>
    <div className={styles.galpopclosebut} ><img className={styles.galpopcloseicon} onClick={props.handleOnClick} src={close}/></div>
          <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true} />
      </div></>
  );
}
