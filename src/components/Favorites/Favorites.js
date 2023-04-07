import React, { Component } from "react";
import "./Favorites.css";
import { postFavoritesList } from "../../api/PostList";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    title: "",
    showLinkToList: false,
  };

  // set title for favorite films
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // post favorite list into api
  saveList = (e) => {
    e.preventDefault();
    const id1 = Math.floor(Math.random() * 99999) + 1;
    const id2 = Math.floor(Math.random() * 99999) + 1;
    const id3 = Math.floor(Math.random() * 99999) + 1;

    const list = {
      title: this.state.title,
      movies: this.props.favorites,
      id: `${id1}${id2}${id3}`,
    };

    if (postFavoritesList(list)) {
      this.setState({
        showLinkToList: !this.state.showLinkToList,
        listId: list.id,
      });
    }
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
        {this.state.showLinkToList ? (
          <Link to={`/list/${this.state.listId}`}>Перейти к списку</Link>
        ) : (
          <button
            type="button"
            className="favorites__save"
            onClick={this.saveList}
            disabled={disabled}
          >
            Сохранить список
          </button>
        )}
      </div>
    );
  }
}

export default Favorites;
