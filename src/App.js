import './App.css';

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import SearchBar from './Components/SearchBar/SearchBar.js';

function App() {


  return (
    <div className="App">

      <header>
        <Header />
      </header>

      <div id="searchbar">
        <SearchBar />
      </div>

      <main>
        <Home />
      </main>

    </div>
  );
}

export default App;
