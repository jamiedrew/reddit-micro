import {Link} from 'react-router-dom';

export const PostPreview = (props) => {

    const post = props.postData;

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

    return (
        <div className="post-preview">
            <h2>{post.title}</h2>
            <div className="post-info">
                <span className="subreddit">{post.subreddit}</span>
                <span className="score">{intToString(post.score)}</span>
            </div>
            
        </div>
    )
    
}