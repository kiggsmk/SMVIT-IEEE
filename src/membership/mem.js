import styles from './membership.module.css';
import React,{useState, useRef} from 'react';
import mail from './mailicon.png';


export default function Membership(){
    const [rupee, setCurrency]= useState (true);
    function changeCurrency(){
        setCurrency(!rupee);
    }   

    const reachRef= useRef(null);
    return(
        <div className={styles.membody}>
            <div className={styles.memtitlecont}></div>
            <div className={styles.memtopcont}>
                <div className={styles.memtopleftcont}>
                    <div className={styles.tlc1cont}>
                        <div className={styles.tlc1textcont}><p className={styles.tlc1text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p></div>
                        <div className={styles.tlc1butcont}><button onClick={()=>{reachRef.current?.scrollIntoView({behavior:'smooth'})}} type='button' className={styles.tlc1but}>Reach Out!</button> </div>
                    </div>
                    <div className={styles.tlc2cont}>
                        <div className={styles.tlc2headcont}><h1 className={styles.tlc2head}>Joining today will get you:</h1></div>
                        <div className={styles.tlc2listcont}>
                            <ul className={styles.tlc2list}>
                                <li className={styles.tlc2listitem}>Something</li>
                                <li className={styles.tlc2listitem}>Something</li>
                                <li className={styles.tlc2listitem}>Something</li>
                                <li className={styles.tlc2listitem}>Something</li>
                                <li className={styles.tlc2listitem}>Something</li>
                                <li className={styles.tlc2listitem}>Something</li>
                            </ul>
                            <div className={styles.listimgcont}>
                                <img src='img' alt='ieee' className={styles.listimg}/><br/>
                                <img src='img' alt='ieee' className={styles.listimg}/><br/>
                                <img src='img' alt='ieee' className={styles.listimg}/><br/>
                                <img src='img' alt='ieee' className={styles.listimg}/>
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
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
                        <td ref={reachRef} onClick={()=>changeCurrency()}>{rupee ? '₹':'$'}</td>
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