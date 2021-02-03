import './SearchBar.css';

const SearchBar = () => {
    return (
        <div id="searchbar">
            <label for="redditsearch">Search Reddit: </label>
            <form class="search">
                <input type="search" id="redditsearch" name="redditsearch" placeholder="Search Reddit" required></input>
                <button type="submit">Go</button>
            </form>
        </div>
    )
};

export default SearchBar;