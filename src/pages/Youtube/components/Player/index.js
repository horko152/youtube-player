import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Youtube from 'react-youtube';
import './index.css';

const Player = () => {

    const currentVideo = useSelector(state => state.video.currentVideo);

    const opts = {
        height: '480',
        width: '720',
        playerVars: {
            autoplay: 1
        }
    };

    const onReadyMethod = (event) => {
        event.target.pauseVideo();
    }

    return(
        <div className="youtube-player">
            <div className="player">
            <Youtube
                videoId={currentVideo?.id?.videoId}
                opts={opts}
                onReady={onReadyMethod}
            />
            </div>
        </div>
    );
}

export default Player;