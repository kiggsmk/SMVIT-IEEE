
import styles from './components.module.css';


function Card(props){
    return(

        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img  alt={props.title} src={props.image}/>
            </div>

            <div className={styles.cardHead}>
                <h2 className={styles.cardHeadText}>{props.title}</h2>
            </div>

            <div className={styles.cardDesc}>
                <p className={styles.cardDescText}>{props.brief}</p>
            </div>

            

        </div>
    )
}

export default Card;