import React  from 'react';
import MovieImage from '../Movie/MovieImage.js';
import MovieTitle from '../Movie/MovieTitle.js';
import MovieDate from '../Movie/MovieDate.js';
import MovieGenre from '../Movie/MovieGenre.js';
import MovieRating from '../Movie/MovieRating.js';
import MovieDuration from '../Movie/MovieDuration.js';
import MovieDescription from '../Movie/MovieDescription.js';
import './MoviePoster.css';


const MoviePoster = (props) => (
    <div className="movie-poster">
        <div className="search-navigation" >
            <button className="search-page-button" onClick={() => props.goSearch('search')}>Go to search</button>
        </div>

        <div className="movie-information">
            <div className="movie-poster-img">
                <MovieImage imageUrl={props.movie.imageUrl} />
            </div>

            <div className="movie-poster-body">
                <div className="movie-title-rating">
                    <div className="movie-poster-title">
                        <MovieTitle title={props.movie.title} />
                    </div>
                    <div className="movie-poster-rating">
                        <MovieRating rating={props.movie.rating} />
                    </div>
                </div>

                <div className="movie-date-duration">
                    <div className="movie-post-date">
                        <MovieDate date={props.movie.date} />
                    </div> 
                    <div className="movie-post-duration">
                        <MovieDuration duration={props.movie.duration} />
                    </div>
                </div>

                <div className="movie-poster-description">
                    <MovieDescription description={props.movie.description} />
                </div> 
            </div>

        </div>

        
    </div>
);

export default MoviePoster; 