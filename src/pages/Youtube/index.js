import React from 'react';

import Header from '../../components/Header';
import Player from './components/Player';
import ListOfVideos from './components/ListOfVideos';
import './index.css';

const Youtube = () => {

    return(
        <div className="content">
            <Header/>
            <div className="content-main">
                <Player/>
                <ListOfVideos/>
            </div>
        </div>
    );
}
export default Youtube;