import styles from './components.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './card.js';


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
            <div className={styles.cardHolder}>
                <Carousel   responsive={responsive} 
                            swipeable={false}
                            draggable={false}
                            ssr={true} 
                            infinite={true}
                            focusOnSelect={true}>
                    <div className={styles.cardHolder}><Card image="img" title="hanchukachuka" brief="kbdjkebfukwekbcwcbw wdbcw"/></div>
                    <div className={styles.cardHolder}><Card image="img" title="htmkcba" brief="kbdjkebfukwekbcwcbw wdbcw"/></div>
                    <div className={styles.cardHolder}><Card image="img" title="hanchukachuka" brief="kbdjkebfukwekbcwcbw wdbcw"/></div>
                    <div className={styles.cardHolder}><Card image="img" title="hanchukachuka" brief="kbdjkebfukwekbcwcbw wdbcw"/></div>
                </Carousel>
            </div>
            <hr/>

        </div>

    )
}