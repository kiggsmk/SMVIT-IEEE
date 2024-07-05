import styles from './components/soc.module.css';
import Soccont from './components/container';
import rep1 from './ravi.jpeg';
import React, {useEffect} from 'react';
import p1 from './comsoc poster.png';
import p2 from './photonicsposter.png';
import p3 from './wieposter.png';


export default function Soc(){
    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    return(
        <div className={styles.soccont}>
            <div className={styles.titlecont}>
                <div className={styles.titleheadcont}>
                    <h3 className={styles.titlehead1}>Student Branch</h3>
                    <h1 className={styles.titlehead2}>Societies & Affinities</h1>
                </div>
            </div>
            <div className={styles.socbodycont}>
                <div className={styles.soc1}>
                    <Soccont socimg={p1}
                    name="Communication Society" 
                    desc="The Communication Society of the IEEE Student Branch delves into wireless communication,
                    networking, and signal processing through workshops, seminars, and projects. It's a hub for
                    theoretical understanding and practical application, fostering skill development and cutting-edge
                    research. Connect with peers, industry professionals, and experts, exploring innovation in
                    communication technology." 
                    rep={rep1}
                    teamdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "/>
                </div>

                <div className={styles.soc1}>
                    <Soccont socimg={p2}
                    name="Photonics society" 
                    desc="The Photonics Society of the IEEE Student Branch is a dedicated community focused on the
                    exploration and advancement of photonics technologies. Through interactive workshops, seminars,
                    and hands-on projects, members delve into the fascinating realm of light-based technologies,
                    including optics, lasers, and fiber optics.
                    Join us to engage with fellow enthusiasts, learn from industry experts, and contribute to
                    groundbreaking research in photonics, shaping the future of this dynamic field." 
                    rep={rep1}
                    teamdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "/>
                </div>

                <div className={styles.soc1}>
                    <Soccont socimg={p3}
                    name="Women in Engineering (WIE)" 
                    desc="The Women in Engineering (WIE) Affinity Group within the IEEE Student Branch is a supportive
                    community dedicated to empowering and advancing women pursuing careers in engineering and
                    technology. Through mentorship programs, networking events, and workshops, WIE fosters a culture
                    of inclusivity, skill development, and leadership among its members. Join us to connect with inspiring female leaders, access valuable resources, and pave the way for
                    a more diverse and inclusive future in engineering." 
                    rep={rep1}
                    teamdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "/>
                </div>

            </div>
        </div>
        
    )
}