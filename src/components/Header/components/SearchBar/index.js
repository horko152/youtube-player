import React, { useState, useEffect } from 'react';
import Input from '../../../Input';
import {useSelector, useDispatch} from 'react-redux'; 
import youtube from '../../../../services/api';
import './index.css';

const SearchBar = () => {

    const inputValue = useSelector(state => state.input);
    const dispatch = useDispatch();

    const gettingData = (text) => {
       youtube.get("search",{
            params: {
                part: "snippet",
                maxResults: 10,
                key: 'key',
                q: inputValue.text,
            }
        })
        .then((result) => {
            console.log(result.data.items);
            if(result?.data?.items)
            {
                dispatch({type: 'CHANGE_LIST_OF_VIDEOS', payload: result.data.items});
                dispatch({type: 'CHANGE_CURRENT_VIDEO', payload: result.data.items[0]});
            }
        });
    }

    // useEffect(() => {
    //     console.log("Some text");
    // },[inputValue.text])

    return(
        <div className="searchbar">
            <Input
                value={inputValue.text}
                onChange={value => dispatch({type: 'CHANGE_VALUE', payload: value})}
                // onKeyPress
            />
        </div>
    );
}

export default SearchBar;