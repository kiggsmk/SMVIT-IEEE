import styles from './about.module.css';
import React from 'react';
import ReactPlayer from 'react-player';


export default function VidPlayer(){
    return(
        <div className={styles.vidcont}>
            <ReactPlayer className={styles.vid} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
    )
}