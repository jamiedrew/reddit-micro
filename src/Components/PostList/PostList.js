import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import _ from 'lodash';
import { GetRedditPosts } from '../../Actions/GetRedditPosts';
import PostPreview from './PostPreview';
import {RedditSort, SubredditInfo} from './PostListHeader'
import { GetSubredditInfo } from '../../Actions/GetSubredditInfo';

export const PostList = (props) => {

    let subredditName = props.match.params.subreddit;
    
    const dispatch = useDispatch();

    const fetchData = () => {
        if (subredditName !== null) {
            dispatch(GetSubredditInfo(subredditName));
            dispatch(GetRedditPosts(subredditName));
        }
    }

    useEffect(() => {
        fetchData();
        
        window.scroll({
            top: 0,
            bottom: 0,
            behavior: "smooth"
        });
        
    }, [subredditName])

    const postList = useSelector(store => store.PostList);
    const subredditInfo = useSelector(store => store.Subreddits);

    const ShowData = () => {
        if (!_.isEmpty(postList.data)) {
            return postList.data.map(element => {
                return(
                    <PostPreview
                        key={element.data.id}
                        postData={element.data}
                    />
                )
                
            })
        }
    }

    if (postList.loading) {
        return <p>loading...</p>
    }

    if (postList.errorMsg !== ``) {
        return <p>{postList.errorMsg}</p>
    }

    return (
        <div>
            <div id="post-list">
                { subredditName ? <SubredditInfo information={subredditInfo.data} /> : <RedditSort /> }
                {ShowData()}
            </div>
        </div>
    )
};