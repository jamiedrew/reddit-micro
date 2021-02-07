const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ``,
}

export const PostListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "REDDIT_POSTLIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ``,
            }
        case "REDDIT_POSTLIST_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: `ERROR: unable to get reddit posts`,
            }
        case "REDDIT_POSTLIST_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: ``,
                data: action.payload.children,
            }
        default:
            return state;
    }
}