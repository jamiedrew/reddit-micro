import {combineReducers} from 'redux';
import { CommentsReducer } from './CommentsReducer';
import {PostListReducer} from './PostListReducer';
import {SubredditReducer} from './SubredditReducer';

export const RootReducer = combineReducers({
    PostList: PostListReducer,
    Subreddits: SubredditReducer,
    Comments: CommentsReducer,
})