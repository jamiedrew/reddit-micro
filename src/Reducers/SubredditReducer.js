const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ``,
}

export const SubredditReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "SUBREDDIT_INFO_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ``,
            }
        case "SUBREDDIT_INFO_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: `ERROR: unable to get subreddit information`,
            }
        case "SUBREDDIT_INFO_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: ``,
                data: action.payload,
            }
        default:
            return state;
    }
}