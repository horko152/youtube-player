import React from 'react';
import './index.css';
import Video from './Video';
import { useSelector } from 'react-redux';

const ListOfVideos = () => {

    const listOfVideos = useSelector(state => state.video.listOfVideos);

    return(
        <div className="listofvideos">
            {listOfVideos?.map(video => {
                return <Video video={video}/>;
            })}
        </div>
    );
}

export default ListOfVideos;