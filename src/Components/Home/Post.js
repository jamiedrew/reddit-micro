import './Post.css';

function Post(props) {
    
    let media;
    if (props.imgurl) {
        media = <div id="media"><img src={props.imgurl} alt={props.imgalt} ></img></div>;
    }

    return (
        <div id="post">
            {media}
            <div id="body">
                <h2><a href={props.url}>{props.title}</a></h2>
                <div id="info">
                    <span id="score">{props.score}</span>
                    <span id="subreddit">{props.subreddit}</span>
                </div>
                <p>{props.body}</p>
                <span id="commentcount">{props.commentcount} comments</span>
            </div>
        </div>
    )
}

export default Post;