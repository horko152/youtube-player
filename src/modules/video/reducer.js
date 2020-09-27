import { 
    CHANGE_LIST_OF_VIDEOS, 
    CHANGE_CURRENT_VIDEO 
} from './types';

const initialState = { 
    isLoading: true,
    listOfVideos: [],
    currentVideo: {}
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LIST_OF_VIDEOS: 
        return{
            ...state,
            listOfVideos:action.payload
        }
        case CHANGE_CURRENT_VIDEO:
        return{
            ...state,
            currentVideo:action.payload
        }
        default:
        return state;
    }
}

export default videoReducer;