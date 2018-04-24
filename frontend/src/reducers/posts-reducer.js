import {FETCHED_POSTS} from '../actions/fetch-posts';

export default function(state=null, action) {
    switch(action.type) {
        case FETCHED_POSTS: 
            return action.posts;
            break;
        default:
            return state;
    }
    
}