import {combineReducers} from 'redux';
import {PostListReducer} from './PostListReducer';

export const RootReducer = combineReducers({
    PostList: PostListReducer,
})