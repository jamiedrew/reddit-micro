import './Home.css';
import Post from './Post.js';

function Home() {
    return (
        <div id="home">
            <Post imgurl="fake_data/chen.jpg" imgalt="" title="Cat." subreddit="aww" score="420" commentcount="3" />
            <Post imgurl="fake_data/fzama.jpg" imgalt="" title="A blurry, blurry lady" score="58008" subreddit="pics" commentcount="69" />
            <Post title="This is a fake post! They're all fake posts!" subreddit="all" score="69" body="Lorem ipsum whatever. Don't you see? This is all fake! Wake up, sheeple!" commentcount="0" />
            <Post imgurl="fake_data/kriggin.jpg" title="ITAP of me in the rain" score="666" subreddit="itap" imgalt="" commentcount="420" />
        </div>
    )
};

export default Home;