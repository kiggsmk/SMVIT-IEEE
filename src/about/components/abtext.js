import styles from './about.module.css';
import img1 from './abimg1.jpg';
import img2 from './abimg2.png';




export default function Abouttext(){
    return(
        <div className={styles.textcont}>
            <div className={styles.uppertextcont}>
                <p className={styles.uppertext}>
                Welcome to the buzzing hive of innovation! <br/> SMVIT IEEE STUDENT BRANCH <br/><br/> We're your go-to destination for all things tech and engineering. Imagine a place where you can dive headfirst into exciting workshops, attend captivating talks by industry pros, and connect with fellow enthusiasts who share your passion. Whether you're a seasoned techie or just starting to dip your toes into the world of technology, there's something here for everyone. </p>
                <div className={styles.uppertextimg1cont}><img className={styles.uppertextimg1} src={img1}/></div>
            </div>
            <div className={styles.lowertextcont}>
            <div className={styles.uppertextimg2cont}><img className={styles.uppertextimg2} src={img2}/></div>
                <p className={styles.lowertext}>
                Join us as we embark on a journey of discovery, where we explore cutting-edge advancements, brainstorm creative solutions to real-world problems, and collaborate on projects that push the boundaries of what's possible. But it's not all serious business – we also know how to have a good time! From social events to hackathons, we're all about fostering a sense of camaraderie and friendship.<br/>
                <br/>
                So why wait? Come be a part of our vibrant community, where every member is valued and every idea is welcomed with open arms. Together, let's unleash our potential, inspire one another, and pave the way for a brighter, tech-driven future. Join us at SMVIT IEEE Student Branch – where innovation knows no bounds                </p>
            </div>
        </div>
    )
}