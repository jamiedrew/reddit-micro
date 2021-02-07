import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import _ from 'lodash';
import { GetRedditPosts } from '../../Actions/GetRedditPosts';
import {PostPreview} from './PostPreview';

export const PostList = (props) => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const postList = useSelector(store => store.PostList);

    const fetchData = () => {
        dispatch(GetRedditPosts());
    }

    React.useEffect(() => {
        fetchData();
        console.log(postList);
    }, [])

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

    return (
        <div id="post-list">
            {ShowData()}
        </div>
    )
};