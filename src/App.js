import {
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';
import './App.css';
import { PostList } from './Components/PostList/PostList.js';
import {FullPost} from './Components/FullPost'
import {SearchList} from './Components/Search/SearchList';
import {SearchBar} from './Components/SearchBar';
import headerImg from './reddit.png';

function App() {

  return (
    <div className="App">

      <header>
        <NavLink to={`/`}>
          <img src={headerImg} alt=""></img>
          <h1>Reddit<span>Micro</span></h1>
        </NavLink>
      </header>

      <SearchBar />

      <main>
        <Switch>
          <Route exact path="/discussion/:post" component={FullPost} />
          <Route exact path="/r/:subreddit/" component={PostList} />
          <Route exact path="/search/:searchTerm" component={SearchList} />
          <Route exact path="/:sort" component={PostList} />
          <Route exact path="/" component={PostList} />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
