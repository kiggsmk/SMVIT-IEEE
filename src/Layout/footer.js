import styles from './nav.module.css';
import li from './linkedin.png';
import fb from './facebook.png';
import ig from './instagram.png'
import {Link, Outlet } from "react-router-dom";
import clglogo from './mvitlogo.jpg';
import ieeeblr from './ieeeblrlogo.png';

export default function Footer(){
    return(
        <><footer className={styles.footcont}>
        <div className={styles.chikkacont}>

          <div className={styles.chikka}>
            <div className={styles.chikkatext}>
              <h1>Join IEEE Today!</h1>
              <h3>✓ free beer</h3><h3 className={styles.bhakk}>✓ unlimited food</h3><h3 className={styles.bhakk}>✓ Netflix</h3>
            </div>

            <div className={styles.chikkabutton}>
              <button className={styles.regbut} type="button">Register</button>
              <Link to="/membership"><button className={styles.membut} type="button">Membership</button> </Link>
            </div>


          </div>

        </div>

        <div className={styles.dodda}>
          <div className={styles.dodda1}>
            <div className={styles.cllglogo}>
              <img alt='SMVIT' className={styles.clglogo} src={clglogo}/>
              <h2 className={styles.clgtext}>Sir M Visvesvaraya Institute of Technology</h2>

            </div>
            <div className={styles.cllgadd}>
              <h3 className={styles.addtext}>Hunasamaranahalli, International Airport Road, Bangalore - 562157 Phone : (+91) 080-28467248, 28477024 Fax : 080-28467081 Email : info@sirmvit.edu</h3>

            </div>

          </div>

          <div className={styles.dodda2}>
            {/* since all the components are same in dodda2, it has directly 
            been copied from dodda1, including the classname. the content and img classname has been modified. */}
          <div className={styles.cllglogo}>
              <img alt='SMVIT' className={styles.ieeelogo} src={ieeeblr}/>
              <h2 className={styles.clgtext}>IEEE Banglore Section</h2>

            </div>
            <div className={styles.cllgadd}>
              <h3 className={styles.addtext}>No-26/1, 5th Floor, WTC-Brigade, Dr. Rajkumar Road, Malleshwaram, Bangalore-560055​</h3>

            </div>
            

          </div>

          <div className={styles.dodda3}>
            <div className={styles.subs}>
              <h3 className={styles.substext}>Stay updated on our all upcoming events!</h3>
              <input className={styles.subsinput} placeholder="email@xyz.com"/>
              <button type="submit" className={styles.subsbut}>Subscribe</button>
            </div>
            <div className={styles.social}>
              <h3 className={styles.socialtext}>Connect us on</h3>
              <img className={styles.socialicon} alt='linkedin' src={li}/>
              <img className={styles.socialicon} alt='facebook' src={fb}/>
              <img className={styles.socialicon} alt='instagram' src={ig}/>
              
            </div>

          </div>

 
        </div>


      </footer></>
      
    )
}
