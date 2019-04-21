import React, { Component } from 'react';

import './SearchFilter.css';

class SearchFilter extends Component {

    render() { 
        return (

                <div className="radio-group">
                    <label>Search by</label>

                    <div className="radio-option">
                        <input type="radio" id="option-title" name="selector" />
                        <label htmlFor="option-title">Title</label>
                    </div>

                    <div className="radio-option">
                        <input type="radio" id="option-genre" name="selector" />
                        <label htmlFor="option-genre">Genre</label>
                    </div>
                    
                </div>

        );
    }
}

export default SearchFilter; 
