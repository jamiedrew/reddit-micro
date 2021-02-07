import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import './App.css';
import { PostList } from './Components/PostList/PostList.js';

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
        <PostList />
      </main>

    </div>
  );
}

export default App;
