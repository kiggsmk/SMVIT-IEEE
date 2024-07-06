import Evcont from "./components/eventcont";
import styles from './components/event.module.css';
import ldposter from './logodesignposter.jpeg';
import a from './demo.jpg';
import b from './demo2.jpg';
import React, {useEffect, useRef} from 'react';
import tsposter from './eventposters/technotsavposter.jpg';
import tsimg from './eventposters/technotsavImg.jpg';
import tsimg2 from './eventposters/technotsavImg2.jpg';
import mswposter from './eventposters/matlabwsposter.jpeg';
import mswimg1 from './eventposters/matsimuImg.jpg';
import mswimg2 from './eventposters/mswImg2.jpg';
import emposter from './eventposters/execomMeetPoster.jpg';
import emimg from './eventposters/execomMeetImg.jpg';
import pdposter from './eventposters/photonicsposter.jpeg';
import pdimg1 from './eventposters/photonicsImg.jpg';
import pdimg2 from './eventposters/photonicsImg2.jpg';
import tdposter from './eventposters/techdayposter.jpeg';
import tdimg1 from './eventposters/techdayImg.jpg';
import tdimg2 from './eventposters/techdayimg2.jpg';
import orposter from './eventposters/oriPoster.jpg';
import orimg1 from './eventposters/oriImg.jpg';
import orimg2 from './eventposters/oriImg2.jpg';
import ldimg1 from './eventposters/logoimg.jpg';
import atposter from './eventposters/alumnitalkposter.jpeg';
import atimg1 from './eventposters/alumniImg.jpg';
import atimg2 from './eventposters/alumniImg2.jpg';

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
            <div className={styles.titlecont}>
                <div className={styles.titleheadcont}>
                    <h3 className={styles.titlehead1}>Student Branch</h3>
                    <h1 className={styles.titlehead2}>Events Conducted</h1>
                </div>
            </div>
            <div className={styles.evtitlecont}></div>
            <div className={styles.evbodycont}>
                <div ref={card1} className={styles.ev} onClick={()=>{card1.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={tsposter}
                    name="Technotsav 2k24" 
                    date="14 June, 2024"
                    evbrief="Hosted by Sutantra in association with IEEE Sir MVIT, this one-day inter-collegiate technical fest was a hub of innovation and creativity. The event featured thrilling competitions, bringing together talented students from various institutions."
                    evdesc="The day was filled with excitement and innovation, featuring six exhilarating competitions. In TechnoTrivia, students tested their knowledge in a challenging quiz event. RoboTrack saw participants showcasing their skills in the line follower bot challenge. The Ideathon event featured the pitching of innovative ideas, while CircuitFix had competitors proving their expertise in circuit debugging. WebCraft unleashed creativity in web designing, and Posterize had participants creating stunning printed infographics. The event provided a platform for students to demonstrate their technical skills and innovative thinking, making it a memorable and enriching experience for all involved."                    
                    evimg2={tsimg2}
                    evimg3={tsimg}/>
                </div>
                <div ref={card2} className={styles.ev} onClick={()=>{card2.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={mswposter}
                    name="MATLAB & Simulink Workshop" 
                    date="27 Feb, 2024"
                    evbrief="The IEEE Student Branch organized a comprehensive workshop on Image Processing and Signal Processing Workflows using MATLAB and Simulink in collaboration with CoreEL Technologies on February 27th and 28th, 2024. Over the course of two days, students had the invaluable opportunity to delve into the intricacies of image and signal processing techniques."                    
                    evdesc="The workshop provided a blend of theoretical understanding and practical hands-on experience, allowing participants to explore the full capabilities of MATLAB and Simulink in processing workflows. Expert instructors from CoreEL Technologies guided the sessions, offering insights into advanced processing techniques and real-world applications. Students engaged in interactive exercises, enhancing their skills and knowledge in these critical areas. The workshop was a resounding success, equipping attendees with the tools and expertise needed to excel in the fields of image and signal processing. It was an enriching experience that fostered learning and innovation among the participants."
                    evimg2={mswimg1}
                    evimg3={mswimg2}/>
                </div>
                <div ref={card3} className={styles.ev} onClick={()=>{card3.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={emposter}
                    name="ExeCom MGM" 
                    date="21 Feb, 2024"
                    evbrief="The IEEE Student Branch Monthly General Meeting was successfully held on Wednesday, February 21st, at Sir M. Visvesvaraya Institute of Technology. Organized by the Executive Committee Members of the IEEE Student Branch STB35861, the event brought together IEEE members for a productive and engaging session. The meeting agenda included a comprehensive discussion of upcoming events, strategies for membership expansion, and a detailed status report on current initiatives. "
                    evdesc="Key announcements were made, and plans for future activities were outlined. The meeting was led by Branch Counselor Mr. Phanindar Ravi P, whose guidance and insights were greatly appreciated by all attendees. The session provided a valuable platform for members to exchange ideas, collaborate on projects, and strengthen the branch's community. Overall, the meeting was a great success, fostering a spirit of innovation and teamwork among the participants."
                    evimg2={emimg}
                    />
                </div>
                <div ref={card4} className={styles.ev} onClick={()=>{card4.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={pdposter}
                    name="Photonics design contest" 
                    date="14 Feb, 2024"
                    evbrief="The IEEE Photonics Society Student Chapter at Sir M. Visvesvaraya Institute of Technology, in association with the Sutantra Photonics Club, successfully organized the Photonics Design Contest on February 14, 2024. This event, part of the Kalakausthubha initiative, was coordinated by faculty members Ms. Vijayashri V. Belgaonkar and Ms. Vijayalakshmi S."
                    evdesc=" the contest provided an exciting platform for students to showcase their creativity and technical skills in photonics design. Participants were challenged to develop innovative designs, with the top entries receiving exciting prizes and participation certificates. The event was graced by the presence of Prof. Rakesh S. G., Principal, Dr. S. K. Uma, Chairman of Kalakausthubha, and Mr. Phaninder Ravi, Vice-Chair of Sutantra. The contest was a tremendous success, fostering a spirit of innovation and collaboration among the students."
                    evimg2={pdimg1}
                    evimg3={pdimg2}/>
                </div>
                <div ref={card5} className={styles.ev} onClick={()=>{card5.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={tdposter}
                    name="Tech Day 2023" 
                    date="15 Sept, 2023"
                    evbrief="Tech-Day 2023, organized by the IEEE Student Branch at Sir M. Visvesvaraya Institute of Technology in association with Sutantra, was held on September 15th. This highly anticipated event kicked off at 9:00 AM and featured a variety of engaging and competitive activities designed to inspire and challenge participants. "
                    evdesc="Events included Talk It Up, a public speaking competition; The Codez, a coding challenge; Spot Painting, a creative art contest; a Quiz to test participants' knowledge across various domains; and Puzzlez, a problem-solving challenge. The day was packed with opportunities for students to showcase their skills, collaborate with peers, and gain valuable experiences. The event saw enthusiastic participation and fostered a spirit of innovation and teamwork among the attendees. It was a memorable and successful event that highlighted the technical prowess and creativity of the students at Sir MVIT."
                    evimg2={tdimg2}
                    evimg3={tdimg1}/>
                </div>
                <div ref={card6} className={styles.ev} onClick={()=>{card6.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={orposter}
                    name="Orientation Programme" 
                    date="9 Feb, 2023"
                    evbrief="On February 9th, 2023, the IEEE SMVIT Student Branch hosted a highly informative and engaging orientation session at the Marconi Seminar Hall. The event, which commenced at 2:00 PM, aimed to introduce students to the world's largest professional community, IEEE. Attendees gained valuable insights into the organization's mission, activities, and the numerous benefits of membership."
                    evdesc="The session highlighted the extensive professional development opportunities available through IEEE, including access to exclusive resources, networking events, and technical advancements. Students learned about various IEEE societies, special interest groups, and the potential for personal and professional growth. The event saw a significant turnout, reflecting the strong interest in IEEE among the student body. The orientation not only educated attendees about the advantages of joining IEEE but also fostered a sense of community and enthusiasm for future activities. Participants left the session well-informed and eager to engage with the IEEE SMVIT Student Branch's initiatives."
                    evimg2={orimg2}
                    evimg3={orimg1}/>
                </div>
                <div ref={card7} className={styles.ev} onClick={()=>{card7.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={ldposter}
                    name="Logo Design contest" 
                    date="16 Jan, 2023"
                    evbrief="The IEEE SMVIT Student Branch recently concluded its highly anticipated Logo Design Competition, inviting creative minds to design a compelling logo that tells a story. Submissions were open until 6 PM on January 16th, with participants eager to showcase their design talents over the weekend. The competition offered an exciting opportunity for the winner to become the official design lead of the IEEE SMVIT Student Branch."
                    evdesc="n addition to this prestigious role, the winner received a certificate of recognition and the chance to represent the student branch in an official IEEE logo design competition at the global level. Participants were encouraged to design a logo that captures the essence and vision of the IEEE community. The event drew considerable attention, fostering a spirit of creativity and innovation among students. This competition not only highlighted the artistic abilities of the participants but also underscored the importance of visual identity in representing the IEEE SMVIT Student Branch's mission and values."
                    evimg2={ldimg1}
                    />
                </div>
                <div ref={card8} className={styles.ev} onClick={()=>{card8.current?.scrollIntoView({behavior:'smooth'})}}>
                    <Evcont evimg1={atposter}
                    name="Alumni Talk" 
                    date="27 Dec, 2022"
                    evbrief="On January 27th, 2022, the IEEE Student Branch organized an insightful event titled Student to Engineer. This enriching session featured our esteemed alumnus, Mr. Ramesh Madakasira, who shared his valuable experiences and knowledge about engineering and entrepreneurship. "
                    evdesc="Attendees were captivated by Mr. Madakasira's journey from a student to a successful engineer and entrepreneur. His engaging talk provided practical advice and inspired many to pursue their own ambitions with confidence. The event was a resounding success, leaving participants motivated and equipped with new insights to navigate their future careers."
                    evimg2={atimg1}
                    evimg3={atimg2}/>
                </div>
            </div>
        </div>
    )
}