import React, { Component } from 'react';

class SearchButton extends Component {
    
    render() { 
        return (
            <button className="search-button" type="submit">Search <i className="fa fa-search"></i></button>
        );
    }
}

export default SearchButton; 