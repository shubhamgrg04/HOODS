export const FETCHED_POSTS = 'FETCHED_POSTS';

export default function fetchPosts() {
    return (dispatch) => {
        fetch("http://localhost:8080")
        .then((response)=> response.json())
        .then(posts => {
            dispatch({
                type: FETCHED_POSTS,
                posts: posts
            })
        });
    };
}