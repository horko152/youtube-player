import { 
    CHANGE_INPUT_VALUE, 
    CHANGE_LIST_OF_VIDEOS, 
    CHANGE_CURRENT_VIDEO 
} from './types';

const initialState = { 
    inputValue: '',
    isLoading: true,
    listOfVideos: [],
    currentVideo: {}
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE: 
        return{
            ...state,
            inputValue:action.payload
        }
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