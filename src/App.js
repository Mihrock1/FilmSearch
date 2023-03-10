import './App.css';
import {useEffect, useState} from "react";
import FilmCard from "./component/FilmCard";

// OMDb API Key: 277c1396
const OMDB_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=277c1396';
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${OMDB_API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
      <div className="max-w-4xl mx-auto py-6 content-evenly">
          <div className="max-w-lg mx-auto">
              <div className="font-thin text-2xl tracking">
                  <h1 className="text-center">Film Search</h1>
              </div>

              <div className="justify-center h-14 w-full my-4 space-x-4">
                  <input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search for movies"
                      className="w-96 border mt-2 px-2 py-2"
                  ></input>
                  <button className="px-2 py-2 rounded text-white font-semibold bg-orange-500 hover:bg-orange-700"
                          onClick={() => searchMovies(searchTerm)}>
                      Search
                  </button>
              </div>
          </div>

        {movies?.length > 0 ? (
            <div className="container mx-auto p-2 grid grid-cols-3 gap-6">
              {movies.map((movie) => (
                  <FilmCard movie={movie} />
              ))}
            </div>
        ) : (
            <div>
              <h2>No movies found</h2>
            </div>
        )}
      </div>
  );
};

export default App;