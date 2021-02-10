import axios from 'axios';

export const GetRedditPosts = (subreddit="popular") => async dispatch => {
    try{
        dispatch({
            type: "REDDIT_POSTLIST_LOADING",
        })

        const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
        let postsResponse = response.data.data;
        // console.log("Posts data:")
        // console.log(postsResponse);
        
        dispatch({
            type: "REDDIT_POSTLIST_SUCCESS",
            payload: postsResponse,
        })

    } catch (error) {
        dispatch({
            type: "REDDIT_POSTLIST_FAILED",
        })
    }
}