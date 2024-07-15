import styles from './components.module.css';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import frontimg from './frontimg.jpg';


export default function Who(){


    const [isVisible, setIsVisible] = useState(false);

    const { ref, inView } = useInView({
      threshold: 0.8, 
      triggerOnce: false, 
    });
  
    React.useEffect(() => {
      setIsVisible(inView);
    }, [inView]);

    

    return(
        <div className={styles.whocont}>
            <div className={styles.whoheading}><h1 className={styles.headingtext}>Who are we</h1></div>
            <div className={styles.whobot} ref={ref}>
                <div className={(isVisible ? styles.bottextcontvisible : styles.bottextcont)}>
                    <p className={styles.bottext}>The IEEE Student Branch at Sir M. Visvesvaraya Institute of Technology, is a dynamic community
                            fostering innovation and collaboration among budding engineers and technologists. Through
                            workshops, seminars, and hands-on projects, we explore cutting-edge advancements in technology,
                            from artificial intelligence to renewable energy. Our goal is to empower students with practical skills
                            and knowledge while providing networking opportunities with industry professionals, preparing
                            them for a successful career in the ever-evolving world of technology.
                    </p>

                </div>
                <div className={(isVisible ? styles.botimgcontvisible : styles.botimgcont)}>
                    <img alt="ieee-mvit" className={styles.botimg} src={frontimg}/>

                </div>
            </div>
            <hr />
        </div>

    )

}