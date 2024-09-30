import styles from './nav.module.css';
import React,{useState} from 'react';
import li from './linkedin.png';
import fb from './facebook.png';
import ig from './instagram.png';
import {NavLink} from "react-router-dom";
import clglogo from './mvitlogo.jpg';
import ieeeblr from './ieeeblrlogo.png';

export default function Footer(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/emailcoll', {
      method: 'POST',
      mode:"no-cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Data Saved Successfully!")
    }
  };
    return(
        <><footer className={styles.footcont}>
        <div className={styles.chikkacont}>

          <div className={styles.chikka}>
            <div className={styles.chikkatext}>
              <h1>Join IEEE Today!</h1>
              <h3 className={styles.bhakk1}>✓ Global Networking</h3><h3 className={styles.bhakk}>✓ Exclusive Resources</h3><h3 className={styles.bhakk}>✓ Career Boost</h3>
            </div>

            <div className={styles.chikkabutton}>
            <NavLink className={styles.membut} to="/membership"><button className={styles.regbut} type="button">Register</button></NavLink>
              <NavLink className={styles.membut} to="/membership"><button className={styles.regbut} type="button">Membership</button></NavLink>
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
            <form onSubmit={handleSubmit} className={styles.subs}>
              <label  className={styles.substext}>Stay updated on our all upcoming events!</label>
              <input onChange={handleChange} value={formData.email} name="email" className={styles.subsinput} placeholder="email@xyz.com"/>
              <button  type="submit" className={styles.subsbut}>Subscribe</button>
            </form>
            <div className={styles.social}>
              <h3 className={styles.socialtext}>Connect us on</h3>
             <a href='https://www.linkedin.com/company/ieee-mvit/'> <img className={styles.socialicon} alt='linkedin' src={li}/></a>
             <img className={styles.socialicon} alt='facebook' src={fb}/>
             <a href='https://www.instagram.com/ieee_sirmvit?igsh=MWlua3JhaWFnOTFhcw=='><img className={styles.socialicon} alt='instagram' src={ig}/></a>
              
            </div>

          </div>

 
        </div>


      </footer></>
      
    )
}
