import styles from './components.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './card.js';
import logodesign from './logodesignposter.jpeg';
import techday from './techdayposter.jpeg';
import alumnitalk from './alumnitalkposter.jpeg';
import matlab from './matlabwsposter.jpeg';
import photonics from './photonicsposter.jpeg';
import {Link} from "react-router-dom";


export default function Events(){
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div className={styles.eventcont}>
            <div className={styles.eventHead}>
                <h1 className={styles.eventHeadText}>Events Conducted</h1>
            </div>
                <Carousel  className={styles.cardrow} responsive={responsive} 
                            swipeable={false}
                            draggable={false}
                            ssr={true} 
                            infinite={true}
                            focusOnSelect={true}>
                    
                    <div className={styles.cardHolder}><Link to="/events"><Card image={alumnitalk} title="Alumni Talk" date="27 Dec, 2022"/></Link></div>
                    <div className={styles.cardHolder}><Link to="/events"><Card image={logodesign} title="Logo Design" date="16 Jan, 2023"/></Link></div>
                    <div className={styles.cardHolder}><Link to="/events"><Card image="img" title="LINUX & GIT Masterclass" date="13 June, 2023"/></Link></div>
                    <div className={styles.cardHolder}><Link to="/events"><Card image={techday} title="TECH-DAY 2023" date="15 Sept, 2023"/></Link></div>
                    <div className={styles.cardHolder}><Link to="/events"><Card image={photonics} title="Photonics Design Contest" date="14 Feb, 2024"/></Link></div>
                    <div className={styles.cardHolder}><Link to="/events"><Card image={matlab} title="MATLAB & Simulink Workshop" date="27 Feb, 2024"/></Link></div>
                </Carousel>
    
            <hr/>

        </div>

    )
}