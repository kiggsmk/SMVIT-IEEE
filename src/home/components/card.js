
import styles from './components.module.css';


function Card(props){
    return(

        <div className={styles.card}>
            <div className={styles.cardImgCont}>
                <img className={styles.cardImg} alt={props.title} src={props.image}/>
            </div>

            
            <div className={styles.cardHeadCont}>
                <h2 className={styles.cardHeadText}>{props.title}</h2>
            </div>

            <div className={styles.cardDateCont}>
                <p className={styles.cardDate}>{props.date}</p>
            </div>

            

        </div>
    )
}

export default Card;