import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetComments} from '../Actions/GetComments'
import _ from 'lodash';
import {Comment} from "./Comment";
import ReactPlayer from 'react-player';
import ReactMarkdown from 'react-markdown';

export const FullPost = (props) => {

    const postID = props.match.params.post;
    const dispatch = useDispatch();

    let post, video, comments;

    const fetchData = () => {
        dispatch(GetComments(postID))
    }

    useEffect(() => {
        fetchData();
        window.scroll({
            top: 0,
            bottom: 0,
            behavior: "smooth"
        });
    }, [])

    const postData = useSelector(store => store.Comments);
    post = postData.data.fullPostData;
    comments = postData.data.commentData;

    if (!_.isEmpty(postData.data)) {
        console.log(post)
        console.log(comments)
    }

    const ShowPost = () => {
        if (!_.isEmpty(post)) {

            if (post.media) {
                if (post.media.reddit_video) {
                    video = <video controls width="100%"><source src={post.media.reddit_video.fallback_url} /></video>
                } else if (post.domain.match(/yout/)) {
                    video = <ReactPlayer url={post.url} controls width="100%" />
                } else if (post.domain.match(/vimeo/)) {
                    video = <ReactPlayer url={post.url} controls width="100%" />
                }
            }

            return (
                <div className="full-post">
                    {video ? video : null}
                    { post.thumbnail ? <img src={post.url} alt="" /> : null }
                    { post.is_self ? <h1><ReactMarkdown>{post.title}</ReactMarkdown></h1> : <h1><a href={post.url}><ReactMarkdown>{post.title}</ReactMarkdown></a></h1> }
                    { post.is_self ? null : <span className="post-link">{post.url}</span> }
                    <h2>{post.author}</h2>
                    <h3>{post.subreddit_name_prefixed}</h3>
                    <div className="body">
                        <ReactMarkdown>{post.selftext}</ReactMarkdown>
                    </div>
                </div>
            )
        }
    }

    const ShowComments = () => {
        if (!_.isEmpty(comments)) {
            return comments.map(comment => {
                return (
                    <div key={comment.data.id}>
                        <Comment
                            data={comment.data}
                        />
                    </div>
                )
            })
        }
    }

    if (postData.loading) {
        return <p>loading...</p>
    }

    if (postData.errorMsg !== ``) {
        return <p>{postData.errorMsg}</p>
    }
    
    return (
        <div>
            {ShowPost()}
            
            <div className="comment-container">
                {ShowComments()}
            </div>
            
        </div>
    )
}