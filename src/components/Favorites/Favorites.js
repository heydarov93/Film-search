import React, { Component } from "react";
import "./Favorites.css";
import { postFavoritesList } from "../../api/postList";
import CreateListButton from "../CreateListButton/CreateListButton";

class Favorites extends Component {
  state = {
    title: "",
    listId: "",
    dataIsSent: false,
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
        this.setState({ listId: postedData.id });
        this.setState({ dataIsSent: !this.state.dataIsSent });
      }
    });
  };

  render() {
    const { favorites, removeFavorite } = this.props;
    const { title, dataIsSent } = this.state;

    // if title empty make the button disabled
    const disabled = !title.trim();

    // set button's text according process
    const text = dataIsSent ? "Идет загрузка" : "Сохранить список";
    return (
      <div className="favorites">
        <input
          value={title}
          className="favorites__name"
          placeholder="Введите название списка"
          name="title"
          onChange={this.onChange}
          disabled={this.state.dataIsSent}
        />
        <ul className="favorites__list">
          {favorites.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
                <button
                  type="button"
                  disabled={this.state.dataIsSent}
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
        <CreateListButton
          onClick={this.saveList}
          listId={this.state.listId || null}
          disabled={disabled}
          text={text}
        />
      </div>
    );
  }
}

export default Favorites;
