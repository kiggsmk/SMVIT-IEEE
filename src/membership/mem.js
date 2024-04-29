import styles from './membership.module.css';

export default function Membership(){
    return(
        <div className={styles.membody}>
            <div className={styles.memtopcont}>
                <div className={styles.memtopleftcont}>
                    <div className={styles.tlc1cont}>
                        <div className={styles.tlc1textcont}><p className={styles.tloc1text}></p></div>
                        <div className={styles.tlc1butcont}><button type='button' className={styles.tlc1}>Reach Out!</button> </div>
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
                        </div>
                    </div>
                </div>
                <div className={styles.regcont}>
                    <div className={styles.regheadcont}><h1 className={styles.reghead}>Register!</h1></div>
                    <div className={styles.regformcont}>
                        <form className={styles.regform} method='post' >
                            <label className={styles.regformlabel}>Name</label>
                            <input placeholder='Enter full name' className={styles.regforminput} name='name' type='text' required/>
                            <label className={styles.regformlabel}>Email</label>
                            <input placeholder='email@xyz.com' className={styles.regforminput} name='email' type='text' required/>
                            <label className={styles.regformlabel}>Contact No.</label>
                            <input className={styles.regforminput} name='name' type='text' />
                            <input type="submit" value="Submit" className={styles.regformbut}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}