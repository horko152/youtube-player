const initialState = { 
    data: [],
}

const listOfVideosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LIST_OF_VIDEOS': 
        return{
            ...state,
            data:action.payload
        }
        default:
        return state;
    }
}

export default listOfVideosReducer;