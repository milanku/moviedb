import axios from "axios";
const URL = `http://www.omdbapi.com/`;
const KEY = "?apikey=aee10107";

const fetchMoviesByPhrase = async (page, searchPhrase) => {
  const moviesData = await axios
    .get(`${URL}${KEY}&s=${searchPhrase}&page=${page}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw new Error(error.response.data.Error);
    });
  if (moviesData.Response === "False") {
    throw new Error(moviesData.Error);
  }
  //Fetch details for each movie by id
  const getRequests = moviesData.Search.map(movieItem =>
    axios.get(`${URL}${KEY}&i=${movieItem.imdbID}`)
  );
  const moviesWithDetails = await axios
    .all(getRequests)
    .then(res => {
      return res;
    })
    .catch(error => {
      throw new Error(error.response.data.Error);
    });
  return {
    movies: moviesWithDetails.map(item => item.data),
    totalResults: parseInt(moviesData.totalResults, 0)
  };
};

const fetchMovieByID = async movieID => {
  const movieData = await axios
    .get(`${URL}${KEY}&i=${movieID}`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw new Error(error.response.data.Error);
    });
  if (movieData.Response === "False") {
    throw new Error(movieData.Error);
  }

  return movieData;
};

const fetchMoviesByIDs = async ids => {
  const getRequests = Array.from(ids).map(id =>
    axios.get(`${URL}${KEY}&i=${id}`)
  );
  const moviesWithDetails = await axios
    .all(getRequests)
    .then(res => {
      return res;
    })
    .catch(error => {
      throw new Error(error.response.data.Error);
    });
  //create Map<Id, Movie>
  let mappedMovies = new Map();
  for (let movieData of moviesWithDetails) {
    mappedMovies.set(movieData.data.imdbID, movieData.data);
  }
  return mappedMovies;
};

export { fetchMoviesByPhrase, fetchMovieByID, fetchMoviesByIDs };
