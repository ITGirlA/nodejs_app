import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';
import SearchButton from './SearchButton';
import ResultsCount from './ResultsCount';
import ResultsSort from './ResultsSort';
import MoviePoster from '../Body/Movie/MoviePoster/MoviePoster.js';
import ErroBoundary from '../ErrorBoundary.js';

import './styles.css';

class Toolbox extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sitePage: props.sitePage,
            movie: {
                "id": 1,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here kfbnfnfg fgbnjfbnfgbk fgbffjnbjfg bnfbjnfgbfjbgn fgbjnfgbjnfbnfbg bfkjbnfkbnfkjbnfklb fgnbfnbkfbnf jfnbfgnbfkbgn fjbnfbkg fggnbkfbnkfbn  should be some description"
            }
        };

    }

    goSearch(item) {
        console.log(this.props.sitePage);
        this.setState({sitePage: item});
    }

    render() { 

        var toolboxBottom;

        if (this.props.moviesFound) {
            toolboxBottom = 
            <div className="toolbox_bottom">
                {this.state.sitePage ==='search' ? (
                    <div>
                        <ResultsCount />
                        <ResultsSort />
                    </div>
                ) : (
                    <div className="toolbox-bottom-genre">
                        <span>Films by {this.state.movie.genre} genre</span>
                    </div>
                )}
            </div>;

        } else {
            toolboxBottom = <div className="toolbox_bottom"></div>;
        }

        return (
            <div className="toolbox">
                <div className="toolbox_head">
                    { this.state.sitePage ==='search' ? (
                        <div>
                            <div style={{textAlign: 'left', padding: '15px'}} >
                                FIND YOUR MOVIE
                            </div>
                            <SearchField />
                            <SearchFilter />
                            <SearchButton />
                        </div>
                    ) : (
                        <div>
                            <MoviePoster movie = {this.state.movie} goSearch={this.goSearch.bind(this)}/>
                        </div>
                    )}

                </div>
                { toolboxBottom }

            </div>
        );
    }
}

export default Toolbox; 