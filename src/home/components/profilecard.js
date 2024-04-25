import styles from './components.module.css';


export default function Pcard(props){
    return(
        <div className={styles.pcard}>
            <div className={styles.pimgcont}><img className={styles.pimg} alt={props.name} src={props.image}/></div>
            <div className={styles.pnamecont}><h2 className={styles.pname}>{props.name}</h2></div>
            <div className={styles.pdesigcont}><h3 className={styles.pdesig}>{props.designation}</h3></div>
            
        </div>
    )
}


