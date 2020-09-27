import React, {useState, useEffect} from 'react';
import './index.css';
import { useSelector } from 'react-redux';

const Player = () => {

    const currentVideo = useSelector(state => state.video.currentVideo);
    const [videoSrc, setVideoSrc] = useState();

    useEffect(() => {
            console.log(currentVideo);
            if(currentVideo?.id?.videoId)
            {
                setVideoSrc(`https://www.youtube.com/embed/${currentVideo.id.videoId}`);
            }
        },[currentVideo])

    return(
        <div className="youtube-player">
            <div className="player">
            <iframe
                frameBorder="0"
                height="100%"
                width="100%"
                title="Video Player"
                src={videoSrc}
            />
            </div>
        </div>
    );
}

export default Player;