import {combineReducers} from 'redux';
import PostsReducer from './posts-reducer';

const allReducers = combineReducers({
    posts : PostsReducer
});

export default allReducers;