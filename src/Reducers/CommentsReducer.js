const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ``,
}

export const CommentsReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "COMMENTS_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ``,
            }
        case "COMMENTS_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: `ERROR: unable to get comments for this post`,
            }
        case "COMMENTS_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: ``,
                data: {
                    ...state.data,
                    fullPostData: action.payload[0].data.children[0].data,
                    commentData: action.payload[1].data.children,
                },
            }
        default:
            return state;
    }
}