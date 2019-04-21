import React, { Component } from 'react';
import MovieCard from './Movie/MovieCard/MovieCard.js';
import './styles.css';

class MoviesList extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
    
        };
    }


    componentDidMount() {

        /*throw new Error("An error has occured in MoviesList component!");*/
        this.setState(() => ({ movies:this.props.movies }));
    }

    render() {
        return (
            <div className="main-content" >
            { this.props.movies.length>0 ? (
                <div className="movies">
                    {
                        this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                    }
                </div>
            ) : (
                <h1>
                    No Films found
                </h1>
            )}
            </div>
        );
    }
}

export default MoviesList; 