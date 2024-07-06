import styles from './membership.module.css';
import React,{useState, useRef, useEffect} from 'react';
import mail from './mailicon.png';
import i1 from './communication.png';
import i2 from './graduated.png';
import i3 from './science.png';
import i4 from './teacher.png';



export default function Membership(){
    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    const [rupee, setCurrency]= useState (true);
    function changeCurrency(){
        setCurrency(!rupee);
    }   

    const reachRef= useRef(null);
    return(
        <div className={styles.membody}>
            <div className={styles.titlecont}>
                <div className={styles.titleheadcont}>
                    <h3 className={styles.titlehead1}>Join the Band</h3>
                    <h1 className={styles.titlehead2}>Membership</h1>
                </div>
            </div>
            <div className={styles.memtopcont}>
                <div className={styles.memtopleftcont}>
                    <div className={styles.tlc1cont}>
                        <div className={styles.tlc1textcont}><p className={styles.tlc1text}>Joining the IEEE Student Branch offers numerous benefits, including access to a global network of professionals, cutting-edge resources, and exclusive events. Enhance your skills, expand your knowledge, and connect with industry leaders. Don't miss out on these incredible opportunities—join us today and take the first step towards a successful engineering career!</p></div>
                        <div className={styles.tlc1butcont}><button onClick={()=>{reachRef.current?.scrollIntoView({behavior:'smooth'})}} type='button' className={styles.tlc1but}>Reach Out!</button> </div>
                    </div>
                    <div className={styles.tlc2cont}>
                        <div className={styles.tlc2headcont}><h1 className={styles.tlc2head}>Joining today will get you:</h1></div><br/>
                        <div className={styles.tlc2listcont}>
                            <ul className={styles.tlc2list}>
                                <li className={styles.tlc2listitem}>Networking with professionals</li>
                                <li className={styles.tlc2listitem}>Industry event invitations</li>
                                <li className={styles.tlc2listitem}>Skill-building workshops</li>
                                <li className={styles.tlc2listitem}>Research collaboration opportunities</li>
                                <li className={styles.tlc2listitem}>Leadership experience development</li>
                                <li className={styles.tlc2listitem}>Access to IEEE resources</li>
                            </ul>
                            <div className={styles.listimgcont}>
                                <img src={i1} alt='ieee' className={styles.listimg1}/><br/>
                                <img src={i2} alt='ieee' className={styles.listimg2}/><br/>
                                <img src={i3} alt='ieee' className={styles.listimg1}/><br/>
                                <img src={i4} alt='ieee' className={styles.listimg2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.regcont}>
                    <div className={styles.regheadcont}><h1 className={styles.reghead}>Register!</h1></div>
                    <div className={styles.regformcont}>
                        <form className={styles.regform} method='post' >
                            <label className={styles.regformlabel}>Name</label><br/>
                            <input placeholder='Enter full name' className={styles.regforminput} name='name' type='text' required/><br/>
                            <label className={styles.regformlabel}>Email</label><br/>
                            <input placeholder='email@xyz.com' className={styles.regforminput} name='email' type='text' required/><br/>
                            <label className={styles.regformlabel}>Contact No.</label><br/>
                            <input className={styles.regforminput} name='phone' type='num' /><br/>
                            <input type="submit" value="Submit" className={styles.regformbut}/><br/>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.memfeecont}>
                <div className={styles.memfeeheadcont}>
                    <h1 className={styles.memfeehead}>Fee Structure</h1>
                </div>
                <div className={styles.feetablecont}>
                <table className={styles.feetable}>
                    <tr>
                        <th>Society/Affinity</th>
                        <th>New Member</th>
                        <th>Renewal</th>
                    </tr>
                    <tr>
                        <td>Student Membership</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹1170':'14$'}</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹1170':'14$'}</td>
                    </tr>
                    <tr>
                        <td>Communications Society(ComSoc)</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹47.58':'0.57$'}</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹47.58':'0.57$'}</td>
                    </tr>
                    <tr>
                        <td>Photonics Society</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹417.39':'5$'}</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹417.39':'5$'}</td>
                    </tr>
                    <tr>
                        <td>Affinity Group-Women in Engineering(WIE)</td>
                        <td onClick={()=>changeCurrency()}>Free!</td>
                        <td ref={reachRef} onClick={()=>changeCurrency()}>Free!</td>
                    </tr>
                </table>    
                </div>
            </div>
            <div  className={styles.memreachcont}>
                <div className={styles.memreachheadcont}>
                    <h1 className={styles.memreachhead}>Reach Out To Us!</h1>
                </div>
                <div className={styles.memreachbody}>
                <div className={styles.butcont}>
                    <a className={styles.but} href="mailto:someone@example.com">
                        <div className={styles.butsrcont}><p className={styles.butsr}>01</p></div>
                        <div className={styles.buttextcont}><p className={styles.buttext}>Pharinder Ravi Parimi</p></div>
                        <div className={styles.arrowcont}><img className={styles.arrow} src={mail} alt="soc"/></div>
                    </a>
                    </div>
                    <hr className={styles.abbutline}/>
                    <div className={styles.butcont}>
                    <a className={styles.but} href="mailto:someone@example.com">
                        <div className={styles.butsrcont}><p className={styles.butsr}>02</p></div>
                        <div className={styles.buttextcont}><p className={styles.buttext}>Manoj S Kulkarni</p></div>
                        <div className={styles.arrowcont}><img className={styles.arrow} src={mail} alt="soc"/></div>
                    </a>
                    </div>
                    <hr className={styles.abbutline}/>
                    <div className={styles.butcont}>
                    <a className={styles.but} href="mailto:someone@example.com">
                        <div className={styles.butsrcont}><p className={styles.butsr}>03</p></div>
                        <div className={styles.buttextcont}><p className={styles.buttext}>Chethan J Vinayaka</p></div>
                        <div className={styles.arrowcont}><img className={styles.arrow} src={mail} alt="soc"/></div>
                    </a>
                    </div>
                    <hr className={styles.abbutline}/>

                </div>
            </div>
        </div>
    )
}