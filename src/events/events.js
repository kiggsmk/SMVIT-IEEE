import Evcont from "./components/eventcont";
import styles from './components/event.module.css';
import ldposter from './logodesignposter.jpeg';
import a from './demo.jpg';
import b from './demo2.jpg';
import React, {useEffect, useRef} from 'react';

export default function Events(){
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);
    const card4 = useRef(null);
    const card5 = useRef(null);
    const card6 = useRef(null);
    const card7 = useRef(null);
    const card8 = useRef(null);


    useEffect(() => {
        window.scrollTo(0,0);
      },[])
    return(
        <div className={styles.evcont}>
            <div className={styles.evtitlecont}></div>
            <div className={styles.evbodycont}>
                <div ref={card1} className={styles.ev} onClick={()=>{card1.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
                <div ref={card2} className={styles.ev} onClick={()=>{card2.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
                <div ref={card3} className={styles.ev} onClick={()=>{card3.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
                <div ref={card4} className={styles.ev} onClick={()=>{card4.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
                <div ref={card5} className={styles.ev} onClick={()=>{card5.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
                <div ref={card6} className={styles.ev} onClick={()=>{card6.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
                <div ref={card7} className={styles.ev} onClick={()=>{card7.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
                <div ref={card8} className={styles.ev} onClick={()=>{card8.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Some Event" 
                    date="27 Oct, 2023"
                    evbrief="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    evdesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    evimg2={a}
                    evimg3={b}/>
                </div>
            </div>
        </div>
    )
}