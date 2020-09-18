import { 
    CHANGE_INPUT_VALUE, 
    CHANGE_LIST_OF_VIDEOS, 
    CHANGE_CURRENT_VIDEO 
} from './types';

export const setInputValue = inputValue => {
    return {
      type: CHANGE_INPUT_VALUE,
      payload: inputValue
    }
}

export const setListOfVideos = (listOFVideos) => {
    return{
        type: CHANGE_LIST_OF_VIDEOS,
        payload: listOFVideos
    }
}

export const setCurrentVideo = currentVideo => {
    return{
        type: CHANGE_CURRENT_VIDEO,
        payload: currentVideo
    }
}