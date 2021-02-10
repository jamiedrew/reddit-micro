import React from 'react';

export const RedditSort = (props) => {
    return (
        <div id="reddit-sorting">
        </div>
    )
}

export const SubredditInfo = (props) => {

    const sub = props.information;

    return (
        <div id="subreddit-info">
            <span id="subreddit-url">{sub.url}</span>
            <h1>{sub.title}</h1>
            { sub.over18 ? <span id="nsfw">NSFW</span> : null}
            <p>{sub.public_description}</p>
            <p>{sub.active_user_count} active users</p>
        </div>
    )
    
}