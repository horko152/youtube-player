import React, { useState, useEffect } from 'react';
import Input from '../../../Input';
import { useSelector, useDispatch } from 'react-redux';
import { get, debounce, result } from 'lodash';
import youtube from '../../../../modules/video/api';
import { setListOfVideos, setCurrentVideo } from '../../../../modules/video/actions';
import Select from 'react-select'; 
import AsyncSelect from 'react-select/async';
import './index.css';

let debounceMethod = null;

const SearchBar = () => {

  const [ inputValue, setInputValue ] = useState('');
  const [ listOfTitles, setListOfTitles ] = useState([]);
  const dispatch = useDispatch();

  const gettingData = async (inputValue) => {
    await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 7,
        key: `${process.env.REACT_APP_CLIENT_KEY}`,
        q: inputValue,
      }
    })
      .then((result) => {
        const videos = get(result, 'data.items', []);
        if (videos) {
          dispatch(setListOfVideos(videos));
          dispatch(setCurrentVideo(videos[0]));
          setListOfTitles(videos?.map(item => {
            return {
              value: item?.id?.videoId,
              label: item?.snippet?.title
            };
          }))
        }
      });
  }

  useEffect(() => {
    debounceMethod = debounce(gettingData, 2000);
  }, [])

  useEffect(() => {
    debounceMethod(inputValue);
  }, [ inputValue ])

  const onKeyPressEnter = e => {
    if (e.key === 'Enter') {
      gettingData();
    }
    else if (e.keyCode === 13) {
      gettingData(inputValue);
    }
  }

  return (
    <div className="searchbar">
      <Select
        options={listOfTitles}
        onInputChange={value => setInputValue(value)}
        isOptionSelected={value => setInputValue(value)}
        onKeyDown={onKeyPressEnter}
        // defaultMenuIsOpen={false}
        closeMenuOnSelect={true}
      />
      {/* <AsyncSelect
                loadOptions={listOfTitles}
                onInputChange={value => setInputValue(value)}
                value={inputValue}
                onKeyDown={onKeyPressEnter}
            /> */}
      {/* <Input
        value={inputValue}
        onChange={value => setInputValue(value)}
        onKeyPress={onKeyPressEnter}
      /> */}
    </div>
  );
}

export default SearchBar;