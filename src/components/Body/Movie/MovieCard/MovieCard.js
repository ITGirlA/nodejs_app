import React  from 'react';
import MovieImage from '../Movie/MovieImage.js';
import MovieTitle from '../Movie/MovieTitle.js';
import MovieDate from '../Movie/MovieDate.js';
import MovieGenre from '../Movie/MovieGenre.js'


const MovieCard = (props) => (
    <div className="movie-card" >
        <div className="movie-card-img">
            <MovieImage imageUrl={props.movie.imageUrl} />
        </div>
        
        <div className="movie-card-body">
            <div className="movie-card-title">
                <MovieTitle title={props.movie.title} />
            </div>
            <div className="movie-card-date">
                <MovieDate date={props.movie.date} />
            </div> 
            <div className="movie-card-genre">
                <MovieGenre genre={props.movie.genre} />
            </div> 
        </div>
    </div>
);

export default MovieCard; 