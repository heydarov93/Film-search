import React, { Component } from "react";
import "./Favorites.css";
import { postFavoritesList } from "../../api/PostList";
import CreateListButton from "../CreateListButton";

class Favorites extends Component {
  state = {
    title: "",
    showLinkToList: false,
    listId: "",
  };

  // set title for favorite films
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // post favorite list into api
  saveList = (e) => {
    e.preventDefault();
    const movies = { title: this.state.title, movies: this.props.favorites };
    postFavoritesList(movies).then((postedData) => {
      if (postedData) {
      }
    });
    this.setState({
      showLinkToList: !this.state.showLinkToList,
    });
  };

  render() {
    const { favorites, removeFavorite } = this.props;
    const { title } = this.state;

    // if title empty make the button disabled
    const disabled = !title.trim();

    return (
      <div className="favorites">
        <input
          value={title}
          className="favorites__name"
          placeholder="Введите название списка"
          name="title"
          onChange={this.onChange}
        />
        <ul className="favorites__list">
          {favorites.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFavorite(item.imdbID);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <CreateListButton />
      </div>
    );
  }
}

export default Favorites;
