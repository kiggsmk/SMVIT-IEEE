import styles from './about.module.css';
import React from 'react';
import ReactPlayer from 'react-player';


export default function VidPlayer(){
    return(
        <div className={styles.vidcont}>
            <ReactPlayer height={500} width={1000}  url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
    )
}