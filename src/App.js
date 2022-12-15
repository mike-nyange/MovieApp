import './App.css';
import { useState,useEffect } from 'react';
import React from 'react';
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=d090b82a';

// const movie1 = {
//   Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//   Title: "Italian Spiderman",
//   Type: "movie",
//   Year: "2007",
//   imdbID: "tt2705436"
// }

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('all');
  }, []);

  return (
    <div className="app">
      <h1>Movie Base</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}/>

        <img src={SearchIcon} alt='search' onClick={()=> searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie1={movie} />
            ))}
      </div>
        ) :

        <div>
          <h2>No movies found</h2>
        </div>
      }

      
    </div>
  )
}

export default App











// function App() {
//   const[counter, setCounter] = useState(0);
//   useEffect(() =>{})
//   return (
//     <div className="App">
//       <h1>Hello!</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//     </div>
//   );
// }

// export default App;
