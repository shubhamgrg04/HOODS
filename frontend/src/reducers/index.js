import {combineReducers} from 'redux';
import PostsReducer from './posts-reducer';
import {reducer as FormReducer} from 'redux-form';

const allReducers = combineReducers({
    channelPosts : PostsReducer,
    form : FormReducer
});

export default allReducers;