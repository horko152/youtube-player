import videoReducer from './video/reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    video: videoReducer
})

export default rootReducer;