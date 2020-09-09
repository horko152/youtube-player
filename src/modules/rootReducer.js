import inputReducer from './inputReducer/reducer';
import listOfVideosReducer from './listOfVideosReducer/reducer';
import currentVideoReducer from './currentVideoReducer/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    input: inputReducer,
    listOfVideos: listOfVideosReducer,
    currentVideo: currentVideoReducer
})

export default rootReducer;