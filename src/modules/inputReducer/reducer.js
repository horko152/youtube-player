const initialState = { 
    text: 'pokemons',
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE': 
        return{
            ...state,
            text:action.payload
        }
        default:
        return state;
    }
}

export default inputReducer;