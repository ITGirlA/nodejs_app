import React, { PureComponent } from 'react';
import Toolbox from './Toolbox/Toolbox';
import Footer from './Footer/Footer';
import MoviesList from './Body/MoviesList';
import ErrorBoundary from './ErrorBoundary.js';

class App extends PureComponent {

    constructor() {
        super();
        this.state = {
            sitePage: '1search',
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies:[
            {
                "id": 1,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 2,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 2",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 3,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 3",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 4,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 3",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 5,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 3",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 6,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 2",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 7,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 3",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 8,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 3",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            },
            {
                "id": 9,
                "imageUrl": "src/images/1.jpg",
                "title": "Movie name 3",
                "date": "2014",
                "genre": "Cartoon",
                "rating": "4.1",
                "duration": "100 min", 
                "description": "Here should be some description"
            }
          ] }));
    }

    render() {
        return (
            <div className="page">
                <div>
                    <ErrorBoundary>
                        <Toolbox moviesFound={this.state.movies.length>0}/>
                    </ErrorBoundary>
                </div>
                <div>
                    <ErrorBoundary>
                        <MoviesList sitePage={this.state.sitePage} movies={this.state.movies} />
                    </ErrorBoundary>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App; 
 
