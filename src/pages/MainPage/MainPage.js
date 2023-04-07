import React, { Component } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";

class MainPage extends Component {
  state = {
    searched: {
      movies: [],
    },
    favorites: {
      movies: [],
    },
  };

  // store searched movies
  setSearched = (data) => {
    this.setState({ searched: { movies: data } });
  };

  // add movies into favorites list
  setFavorites = (id) => {
    const searched = this.state.searched.movies;
    const favorites = this.state.favorites.movies;
    const data = searched.find((movie) => movie.imdbID === id);
    const alreadyAdded = favorites.find((movie) => movie.imdbID === id);
    if (!alreadyAdded)
      this.setState({ favorites: { movies: [...favorites, data] } });
  };

  // remove movie from favorites
  removeFavorite = (id) => {
    const favorites = this.state.favorites.movies.filter(
      (movie) => movie.imdbID !== id
    );

    this.setState({ favorites: { movies: favorites } });
  };

  render() {
    return (
      <div className="main-page">
        <Header />
        <main className="main-page__content">
          <section className="main-page__main-section">
            <div className="main-page__search-box">
              <SearchBox setSearched={this.setSearched} />
            </div>
            <div className="main-page__movies">
              <Movies
                movies={this.state.searched.movies}
                setFavorites={this.setFavorites}
              />
            </div>
          </section>
          <aside className="main-page__favorites">
            <Favorites
              favorites={this.state.favorites.movies}
              removeFavorite={this.removeFavorite}
            />
          </aside>
        </main>
      </div>
    );
  }
}

export default MainPage;
