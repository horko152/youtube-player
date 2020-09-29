import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentVideo } from '../../../../../modules/video/actions';
import './index.css';

const Video = ({ video: { snippet: { thumbnails, title } } }) => {

  // const dispatch = useDispatch();
  // //TODO OnClick
  // const onClickMethod = e => {
  //     if(e)
  //     {
  //         dispatch(setCurrentVideo(e));
  //     }
  // }

  return (
    <div className="video">
      <img src={thumbnails?.medium?.url} alt="Video"/>
      <h6>{title}</h6>
    </div>
  );
}

export default Video;