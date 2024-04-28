import styles from './soc.module.css';
import Card from '../../home/components/card';
import React, { useState } from 'react';

export default function Soccont(props){

    const [hidden, setHidden] = useState(true);
    
    
    var R=(hidden ? "more" : "less");
        

    return(
        <div className={(hidden ? styles.soccardparent : styles.soccardparentunhidden)}>
            <div className={styles.upcont}>
                <div className={styles.upleftcont}>
                    <img className={styles.upleftimg} alt={props.name} src={props.socimg}/>
                </div>
                <div className={styles.uprightcont}>
                    <div className={styles.uprightheadcont}>
                        <h1 className={styles.uprighthead}>{props.name}</h1>
                    </div>
                    <div className={styles.uprighttextcont}>
                        <p className={styles.uprighttext}>{props.desc}</p>
                        <button className={styles.morebut} onClick={() => setHidden(!hidden)}>Read {R} → </button>
                    </div>
                </div>
            </div>

            <hr/>

            <div className={styles.hiddensoccont}>
                <div className={styles.downcont}>
                    <div className={styles.downleftcont}>
                        <img alt="rep" className={styles.downleftimg} src={props.rep}/>
                    </div>
                    <div className={styles.downrightcont}>
                        <div className={styles.downrightheadcont}>
                            <h1 className={styles.downrighthead}>Meet the Team!</h1>
                        </div>
                        <div className={styles.downrighttextcont}>
                            <p className={styles.downrighttext}>{props.teamdesc}</p>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.soceventcont}>
                    <div className={styles.cardHolder}><Card/></div>
                    <div className={styles.cardHolder}><Card/></div>
                </div> */}
            </div>    
        </div>
    )
}
