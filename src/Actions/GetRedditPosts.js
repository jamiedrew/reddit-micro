import axios from 'axios';

export const GetRedditPosts = () => async dispatch => {
    try{
        dispatch({
            type: "REDDIT_POSTLIST_LOADING",
        })

        const response = await axios.get(`https://www.reddit.com/r/popular.json`);
        let postsResponse = response.data.data;
        
        dispatch({
            type: "REDDIT_POSTLIST_SUCCESS",
            payload: postsResponse,
        })

        console.log("Found posts:")
        console.log(postsResponse);

    } catch (error) {
        dispatch({
            type: "REDDIT_POSTLIST_FAILED",
        })
    }
}