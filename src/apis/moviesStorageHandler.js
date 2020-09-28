const favMoviesKey = "favourite-movies-set";

const getFavourites = () => {
  let favourites = new Set(JSON.parse(localStorage.getItem(favMoviesKey)));
  return favourites;
};

const saveFavourites = favourites => {
  localStorage.setItem(favMoviesKey, JSON.stringify(Array.from(favourites)));
};

const saveFavouriteMovie = async id => {
  let favourites = getFavourites();
  favourites.add(id);
  saveFavourites(favourites);
  return favourites;
};

const deleteFavouriteMovie = async id => {
  let favourites = getFavourites();
  favourites.delete(id);
  saveFavourites(favourites);
  return favourites;
};

export { getFavourites, saveFavouriteMovie, deleteFavouriteMovie };
