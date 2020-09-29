import React from 'react';
import { setCurrentVideo } from '../../../../../modules/video/actions';
import { useDispatch } from 'react-redux';
import './index.css';

const Video = ({video}) => {

  const dispatch = useDispatch();

  const onClickVideo = e => {
    dispatch(setCurrentVideo(video));
  }

  return (
    <div className="video" onClick={onClickVideo}>
      <img src={video?.snippet?.thumbnails?.medium?.url} alt="Video"/>
      <h6>{video?.snippet?.title}</h6>
    </div>
  );
}

export default Video;