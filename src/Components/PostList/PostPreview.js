import {Link, NavLink, withRouter, useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const PostPreview = (props) => {

    const post = props.postData;
    let media, thumb = post.thumbnail;

    if (post.thumbnail !== null) {
        media = <img src={post.url} alt="" />
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

            {media}
            
            <div className="post-title">
                { post.is_self ? <h2>{post.title}</h2> : <a href={post.url}><h2>{post.title}</h2></a> }
            </div>

            <span className="subreddit">
                <Link to={`/r/${post.subreddit}/`} onClick={scrollToTop} >{post.subreddit}</Link>
            </span>

            <div className="post-body-preview">
                <p>{post.selftext ? bodyTextPreview : null}</p>
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

export default withRouter(PostPreview)