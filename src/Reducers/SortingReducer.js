const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ``,
}

export const SortingReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "SORTED_POSTLIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ``,
            }
        case "SORTED_POSTLIST_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: `ERROR: unable to get reddit posts`,
            }
        case "SORTED_POSTLIST_SUCCESS":
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