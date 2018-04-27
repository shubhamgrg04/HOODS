import {FETCHED_POSTS} from '../actions/fetch-posts';

export default function(state=null, action) {
    switch(action.type) {
        case FETCHED_POSTS:
        console.log ("Fetched Posts: " + action.channel + " " + action.posts);
            return {channel: action.channel, posts: action.posts};
            break;
        default:
            return state;
    }
    
}