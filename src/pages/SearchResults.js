// src/pages/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import searchData from '../searchData';
import './SearchResults.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const query = useQuery().get('query')?.toLowerCase() || '';

    // Filter data based on the query
    const filteredResults = searchData.filter((item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );

    return (
        <div className="search-results">
            <h2>Search results for "{query}"</h2>
            <p>We found {filteredResults.length} results for "{query}" keyword</p>

            {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                    <div key={item.id} className="result-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <div className="no-results">
                    <p>Sorry, but nothing matched your search terms. Please try again with different keywords.</p>
                    <SearchBar />
                </div>
            )}
        </div>
    );
}

export default SearchResults;
