import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../components/Header';
import Player from './components/Player';
import ListOfVideos from './components/ListOfVideos';
import './index.css';

const Youtube = () => {

    return(
        <Grid justify="center" container spacing={16}>
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Header/>
                    <Player/>
                    <ListOfVideos/>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Youtube;