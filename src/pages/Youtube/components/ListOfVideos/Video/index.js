import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentVideo } from '../../../../../modules/video/actions';
import './index.css';

const Video = ({video}) => {
    
    // const dispatch = useDispatch();
    // //TO_DO OnClick
    // const onClickMethod = e => {
    //     if(e)
    //     {
    //         dispatch(setCurrentVideo(e));
    //     }
    // }

    return(
        <div className="video">
                <img src={video.snippet.thumbnails.medium.url} alt="Video"/>
                <h6>{video.snippet.title}</h6>
        </div>
    );
}

export default Video;