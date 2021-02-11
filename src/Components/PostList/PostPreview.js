import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import ReactMarkdown from 'react-markdown';
const PostPreview = (props) => {

    const post = props.postData;
    let image, video, thumbnail = post.thumbnail;

    if (thumbnail) {
        image = <img src={post.url} alt="" />

        if (image) {
            thumbnail = null;
        }

    }

    if (post.media) {
        if (post.media.reddit_video) {
            video = <video controls width="100%"><source src={post.media.reddit_video.fallback_url} /></video>
        } else if (post.domain.match(/yout/)) {
            video = <ReactPlayer url={post.url} controls width="100%" />
        } else if (post.domain.match(/vimeo/)) {
            video = <ReactPlayer url={post.url} controls width="100%" />
        } else {
            thumbnail = <img src={post.thumbnail} alt="" />
        }
    }

    const intToString = (num) => {
        if (num < 1000) {
            return num;
        }
        var si = [
          {v: 1E3, s: "K"},
          {v: 1E6, s: "M"},
          {v: 1E9, s: "B"},
          {v: 1E12, s: "T"},
          {v: 1E15, s: "P"},
          {v: 1E18, s: "E"}
          ];
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].v) {
                break;
            }
        }
        return (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].s;
    }

    const bodyTextPreview = <span><ReactMarkdown>{post.selftext.substr(0, 275) + "..."}</ReactMarkdown></span>;

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            bottom: 0,
            behavior: "smooth"
        })
    }

    return (
        
        <div className="post-preview">

            {image ? image : null}
            {video ? video : null}
            
            <div className="post-title">
                { thumbnail ? thumbnail : null }
                { post.stickied ? <div className="sticky">sticky</div> : null }
                { post.is_self ? <h2><ReactMarkdown>{post.title}</ReactMarkdown></h2> : <a href={post.url}><h2><ReactMarkdown>{post.title}</ReactMarkdown></h2></a> }
            </div>

            <span className="subreddit">
                <Link to={`/r/${post.subreddit}/`} onClick={scrollToTop} >{post.subreddit}</Link>
            </span>

            <div className="post-body-preview">
                { post.is_self ? null : <div className="domain">{post.domain}</div> }
                <div className="body">{post.selftext ? bodyTextPreview : null}</div>
                <div className="comments-score">
                    <Link to={`/discussion/${post.id}`}>
                        <h4>{intToString(post.num_comments)} comments</h4>
                    </Link>
                    <span className="score">{intToString(post.score)}</span>
                </div>
            </div>
            
        </div>
    )
    
}

export default PostPreview;