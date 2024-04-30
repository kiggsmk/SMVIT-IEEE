import styles from './components/soc.module.css';
import Soccont from './components/container';
import rep1 from './components/demo.jpg';
import titleimg from './components/demo2.jpg';
import React, {useEffect} from 'react';


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
                    <Soccont socimg={titleimg}
                    name="Something society" 
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                    rep={rep1}
                    teamdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "/>
                </div>

                <div className={styles.soc1}>
                    <Soccont socimg={titleimg}
                    name="Something society" 
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                    rep={rep1}
                    teamdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "/>
                </div>

                <div className={styles.soc1}>
                    <Soccont socimg={titleimg}
                    name="Something society" 
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                    rep={rep1}
                    teamdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "/>
                </div>

            </div>
        </div>
        
    )
}