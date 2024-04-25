import styles from './components.module.css';


export default function Who(){
    return(
        <div className={styles.whocont}>
            <div className={styles.whoheading}><h1 className={styles.headingtext}>Who are we</h1></div>
            <div className={styles.whobot}>
                <div className={styles.bottextcont}>
                    <p className={styles.bottext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className={styles.botimgcont}>
                    <img alt="ieee-mvit" className={styles.botimg} src="https://picsum.photos/id/331/400/300"/>

                </div>
            </div>
            <hr />
        </div>

    )

}