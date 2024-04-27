import styles from './about.module.css';
import {NavLink} from "react-router-dom";
import ar from './arrowright.png';

export default function Abbottom(){
    return(
    <div className={styles.bottomcont}>
        <div className={styles.bottomleft}>
            <div className={styles.bottomleftheadcont}>
                <h2 className={styles.bottomlefthead}>
                    Our Vision
                </h2>
            </div>
            <div className={styles.bottomlefttextcont}>
                <p className={styles.bottomlefttext}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>

            </div>

        </div>
        <div className={styles.bottomright}>
            
                <div className={styles.abbutheadcont}>
                    <h2 className={styles.abbuthead}>Be a part today!</h2>
                </div>
                <div className={styles.abbutcont}>
                    <div className={styles.butcont}>
                    <NavLink className={styles.but} to="/socaff">
                        <div className={styles.butsrcont}><p className={styles.butsr}>01</p></div>
                        <div className={styles.buttextcont}><p className={styles.buttext}>Societies and  Affiliations</p></div>
                        <div className={styles.arrowcont}><img className={styles.arrow} src={ar} alt="soc"/></div>
                    </NavLink>
                    </div>
                    <hr className={styles.abbutline}/>
                    <div className={styles.butcont}>
                    <NavLink className={styles.but} to="/membership">
                        <div className={styles.butsrcont}><p className={styles.butsr}>02</p></div>
                        <div className={styles.buttextcont}><p className={styles.buttext}>Membership</p></div>
                        <div className={styles.arrowcont}><img className={styles.arrow} src={ar} alt="soc"/></div>
                    </NavLink>
                    </div>
                    <hr className={styles.abbutline}/>

                </div>

        </div>

    </div>
    )
}