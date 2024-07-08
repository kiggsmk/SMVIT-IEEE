import styles from './nopage.module.css';
export default function NoPage(){
    return(
    <div className={styles.titlecont}>
        <div className={styles.titleheadcont}>
            <h3 className={styles.titlehead1}>You're lost buddy</h3>
            <h1 className={styles.titlehead2}>Page Not found</h1>
        </div>
    </div>
    )
}