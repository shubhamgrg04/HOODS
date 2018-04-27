export const FETCHED_POSTS = 'FETCHED_POSTS';

export default function fetchPosts(channelName="general") {
    return (dispatch) => {
        fetch("http://localhost:8080/" + channelName + '/posts')
        .then((response)=> response.json())
        .then(posts => {
            dispatch({
                type: FETCHED_POSTS,
                channel: channelName,
                posts: posts
            })
        });
    };
}