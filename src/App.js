import {
  Switch,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import {useEffect} from 'react'

import './App.css';
import { PostList } from './Components/PostList/PostList.js';
import {FullPost} from './Components/FullPost'

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

      <div id="searchbar">
            <label htmlFor="redditsearch">Search Reddit: </label>
            <form className="search">
                <input type="search" id="redditsearch" name="redditsearch" placeholder="Search Reddit" required></input>
                <button type="submit">Go</button>
            </form>
        </div>

      <main>
        <Switch>
          <Route exact path="/discussion/:post" component={FullPost} />
          <Route exact path="/r/:subreddit/" component={PostList} />
          <Route exact path="/:sort" component={PostList} />
          <Route exact path="/" component={PostList} />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
