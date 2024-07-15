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
import exmt1 from './media/execommeet1/i1.jpg';
import exmt2 from './media/execommeet1/i2.jpg';
import ldes1 from './media/logodesign/i1.jpg';
import ldes2 from './media/logodesign/i2.jpg';
import ori1 from './media/orientation/i1.jpg';
import ori2 from './media/orientation/i2.jpg';
import ori3 from './media/orientation/i3.jpg';
import ori4 from './media/orientation/i4.jpg';
import phc1 from './media/photonics/i1.jpg';
import phc2 from './media/photonics/i2.jpg';
import phc3 from './media/photonics/i3.jpg';
import phc4 from './media/photonics/i4.jpg';
import phc5 from './media/photonics/i5.jpg';
import tcd1 from './media/techday/i1.jpg';
import tcd2 from './media/techday/i2.jpg';
import tcd3 from './media/techday/i3.jpg';
import tcd4 from './media/techday/i4.jpg';
import tcd5 from './media/techday/i5.jpg';
import ts1 from './media/technotsav/i1.jpg';
import ts2 from './media/technotsav/i2.jpg';
import ts3 from './media/technotsav/i3.jpg';
import ts4 from './media/technotsav/i4.jpg';
import ts5 from './media/technotsav/i5.jpg';
import ts6 from './media/technotsav/i6.jpg';
import ts7 from './media/technotsav/i7.jpg';
import ts8 from './media/technotsav/i8.jpg';
import ts9 from './media/technotsav/i9.jpg';
import ts10 from './media/technotsav/i10.jpg';
import ts11 from './media/technotsav/i11.jpg';
import ts12 from './media/technotsav/i12.jpg';
import ts13 from './media/technotsav/i13.jpg';
import ts14 from './media/technotsav/i14.jpg';
import ts15 from './media/technotsav/i15.jpg';
import ts16 from './media/technotsav/i16.jpg';
import ts17 from './media/technotsav/i17.jpg';
import ts18 from './media/technotsav/i18.jpg';
import ts19 from './media/technotsav/i19.jpg';
import ts20 from './media/technotsav/i20.jpg';
import ts21 from './media/technotsav/i21.jpg';
import ts22 from './media/technotsav/i22.jpg';
import ts23 from './media/technotsav/i23.jpg';
import ts24 from './media/technotsav/i24.jpg';
import ts25 from './media/technotsav/i25.jpg';
import ts26 from './media/technotsav/i26.jpg';
import ts27 from './media/technotsav/i27.jpg';
import ts28 from './media/technotsav/i28.jpg';
import ts29 from './media/technotsav/i29.jpg';
import ts30 from './media/technotsav/i30.jpg';
import ts31 from './media/technotsav/i31.jpg';
import ts32 from './media/technotsav/i32.jpg';
import ts33 from './media/technotsav/i33.jpg';
import ts34 from './media/technotsav/i34.jpg';
import ts35 from './media/technotsav/i35.jpg';
import ts36 from './media/technotsav/i36.jpg';
import ts37 from './media/technotsav/i37.jpg';
import ts38 from './media/technotsav/i38.jpg';
import ts39 from './media/technotsav/i39.jpg';
import ts40 from './media/technotsav/i40.jpg';
import ts41 from './media/technotsav/i41.jpg';
import ts42 from './media/technotsav/i42.jpg';



const images = [
  ial1, ial2, ial3, ial4, ial5, ial6, exmt1, exmt2, ldes1,ldes2,ori1,ori2,ori3,ori4,phc1,phc2,phc3,phc4,phc5,tcd1,tcd2,tcd3,tcd4,tcd5,ts1, ts2, ts3, ts4, ts5, ts6, ts7, ts8, ts9, ts10, ts11, ts12, ts13, ts14, ts15, ts16, ts17, ts18, ts19, ts20, ts21, ts22, ts23, ts24, ts25, ts26, ts27, ts28, ts29, ts30, ts31, ts32, ts33, ts34, ts35, ts36, ts37, ts38, ts39, ts40, ts41, ts42
  
];




export default function GalPop(props) {
  return (
    <>
    <div className={(styles.galpopcontopen)}>
    <div className={styles.galpopclosebut} ><img alt='close' className={styles.galpopcloseicon} onClick={props.handleOnClick} src={close}/></div>
          <SimpleImageSlider
              width={800}
              height={500}
              images={images}
              startIndex={props.indx}
              showBullets={true}
              showNavs={true} />
      </div></>
  );
}
