import React, { Component } from "react";
import "./ListPage.css";
import { fetchFavoritList } from "../../api/fetchFavoritList";

class ListPage extends Component {
  state = {
    title: "",
    movies: [],
    id: "",
    loading: true,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    fetchFavoritList(id)
      .then((data) => {
        this.setState({ ...data });
      })
      .finally(() => this.setState({ loading: !this.state.loading }));
  }
  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">Мой список</h1>
        <ul>
          {this.state.loading
            ? "loading..."
            : this.state.movies.map((item) => {
                return (
                  <li key={item.imdbID}>
                    <a
                      href={`https://www.imdb.com/title/${item.imdbID}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.Title} ({item.Year})
                    </a>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
}

export default ListPage;
