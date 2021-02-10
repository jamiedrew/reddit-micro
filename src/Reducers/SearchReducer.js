const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ``,
}

export const SearchReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "SEARCH_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ``,
            }
        case "SEARCH_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: `ERROR: unable to get search results`,
            }
        case "SEARCH_SUCCESS":
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