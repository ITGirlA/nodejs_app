import React, { Component } from 'react';
import './ResultsSort.css';

class ResultsSort extends Component {
    
    render() { 
        return (
            <div className="radio-button-group">
                <label>Sort by</label>
                <div className="radio-button-option">
                    <input type="radio" id="option-release" name="selector" />
                    <label htmlFor="option-release">Relese</label>
                </div>

                <div className="radio-button-option">
                    <input type="radio" id="option-date" name="selector" />
                    <label htmlFor="option-date">Date</label>
                </div>
                
            </div>
        );
    }
}

export default ResultsSort; 