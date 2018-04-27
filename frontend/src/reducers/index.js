import {combineReducers} from 'redux';
import PostsReducer from './posts-reducer';

const allReducers = combineReducers({
    channelPosts : PostsReducer
});

export default allReducers;