import React, { Component } from 'react';

class SearchField extends Component {
    
    render() { 
        return (
            <input className="search-input" type="text" placeholder="Search.." name="search" />
        );
    }
}

export default SearchField; 