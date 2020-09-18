import React, {useEffect} from 'react';
import Input from '../../../Input';
import {useSelector, useDispatch} from 'react-redux';
import {get} from 'lodash';
import youtube from '../../../../modules/video/api';
import {setListOfVideos, setInputValue, setCurrentVideo} from '../../../../modules/video/actions';
import './index.css';

const SearchBar = () => {

    const inputValue = useSelector(state => state.video.inputValue);
    const listOfVideos = useSelector(state => state.video.listOfVideos);
    const dispatch = useDispatch();

    const gettingData = () => {
       youtube.get("search",{
            params: {
                part: "snippet",
                maxResults: 10,
                key: '',
                q: inputValue,
            }
        })
        .then((result) => {
            console.log(result.data.items);
            if(result?.data?.items)
            {
                const videos = get(result, 'data.items', []);
                dispatch(setListOfVideos(videos));
                dispatch(setCurrentVideo(videos[0]));
                console.log(inputValue);
                console.log(listOfVideos);
            }
        });
    }

    const onKeyPressEnter = e => {
        if(e.key === 'Enter') {
            gettingData();
        }
    }

    return(
        <div className="searchbar">
            <Input
                value={inputValue}
                onChange={value => dispatch(setInputValue(value))}
                onKeyPress={onKeyPressEnter}
            />
        </div>
    );
}

export default SearchBar;