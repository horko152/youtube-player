const initialState = { 
    data: [],
}
    
const currentVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT_VIDEO':
        return{
            ...state,
            data:action.payload
        }
        default:
        return state;
    }
}

export default currentVideoReducer;