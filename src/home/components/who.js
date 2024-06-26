import styles from './components.module.css';


export default function Who(){
    return(
        <div className={styles.whocont}>
            <div className={styles.whoheading}><h1 className={styles.headingtext}>Who are we</h1></div>
            <div className={styles.whobot}>
                <div className={styles.bottextcont}>
                    <p className={styles.bottext}>The IEEE Student Branch at Sir M. Visvesvaraya Institute of Technology, is a dynamic community
                            fostering innovation and collaboration among budding engineers and technologists. Through
                            workshops, seminars, and hands-on projects, we explore cutting-edge advancements in technology,
                            from artificial intelligence to renewable energy. Our goal is to empower students with practical skills
                            and knowledge while providing networking opportunities with industry professionals, preparing
                            them for a successful career in the ever-evolving world of technology.
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