import styles from './components.module.css';
import Pcard from './profilecard';
import mayank from './mayank.jpg';
import akhil from './akhil.jpg';
import manoj from './manoj.jpg';
import chethan from './chethan.jpg';
import mithil from './mithil.jpg';
import shreya from './shreya.jpg';


export default function Execom(){
    return(
        <div className={styles.comcont}>
            <div className={styles.exchead}>
                <h1 className={styles.excheadText}>ExeComm Members</h1>
            </div>
             <div className={styles.parentrow1}>  
            <div className={styles.row1}>
                <div className={styles.profileholder1}><Pcard name="Pharinder Ravi Parimi" image="img" designation="Branch Councillor"/>  </div>
                <div className={styles.profileholder1}><Pcard name="Manoj S Kulkarni" image={manoj} designation="Chair"/></div>
                <div className={styles.profileholder1}><Pcard name="Akhil Kumar" image={akhil} designation="Vice Chair"/></div>
            </div>
            </div>
            <div className={styles.row2}>
                <div className={styles.profileholder2}><Pcard name="Chethan J Vinayaka" image={chethan} designation="Secretary"/></div>
                <div className={styles.profileholder2}><Pcard name="Mithil Dhondhi" image={mithil} designation="treasurer"/></div>
                <div className={styles.profileholder2}><Pcard name="A Shreya" image={shreya} designation="WIE Chair"/></div>
                <div className={styles.profileholder2}><Pcard name="Mayank Tripathi" image={mayank} designation="Webmaster"/></div>
                
            </div>
        </div>
    )

}