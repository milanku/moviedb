import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { loadFavouritesIDs } from "./actions";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

import MovieSearchPage from "./pages/MovieSearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import FavMoviesPage from "./pages/FavMoviesPage";
import Navigation from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

function App(props) {
  useEffect(() => {
    props.initializeFavourites();
  }, []);

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={MovieSearchPage} />
          <Route exact path="/favourites" component={FavMoviesPage} />
          <Route exact path="/movie/:id" component={MovieDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  initializeFavourites: () => dispatch(loadFavouritesIDs())
});

App = connect(
  null,
  mapDispatchToProps
)(App);

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
