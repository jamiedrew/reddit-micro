import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import _ from 'lodash';
import {GetSearchResults} from '../../Actions/GetSearchResults';
import {SearchResult} from './SearchResult';

export const SearchList = (props) => {

    let searchTerm = props.match.params.searchTerm;
    const dispatch = useDispatch();

    const fetchData = () => {
        if (searchTerm !== null) {
            dispatch(GetSearchResults(searchTerm));
        }
    }

    useEffect(() => {
        fetchData();

        window.scroll({
            top: 0,
            bottom: 0,
            behavior: "smooth"
        });

    }, [searchTerm])
    
    const searchResults = useSelector(store => store.Search);

    const ShowResults = () => {
        if (!_.isEmpty(searchResults.data)) {
            return searchResults.data.map (result => {
                return (
                    <SearchResult 
                        key={result.data.id}
                        data={result.data}
                    />
                )
            })
        }
    }

    if (searchResults.loading) {
        return <p>Searching Reddit for "{searchTerm}"...</p>
    }

    if (searchResults.errorMsg !== ``) {
        return <p>{searchResults.errorMsg}</p>
    }


    return(
        <div className="search-results">
            <h1>Search results for "{searchTerm}"</h1>
            {ShowResults()}
        </div>
    )
}