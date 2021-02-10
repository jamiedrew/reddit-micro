import {combineReducers} from 'redux';
import { CommentsReducer } from './CommentsReducer';
import {PostListReducer} from './PostListReducer';
import {SubredditReducer} from './SubredditReducer';
import {SearchReducer} from './SearchReducer';

export const RootReducer = combineReducers({
    PostList: PostListReducer,
    Subreddits: SubredditReducer,
    Comments: CommentsReducer,
    Search: SearchReducer,
})