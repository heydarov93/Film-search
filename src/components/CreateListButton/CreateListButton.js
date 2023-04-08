import React from "react";
import { Link } from "react-router-dom";

class CreateListButton extends React.Component {
  render() {
    const { onClick, listId, disabled, text } = this.props;

    return !listId ? (
      <button
        type="button"
        className="favorites__save"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    ) : (
      <Link target="_blank" to={`/list/${listId}`}>
        Перейти к списку
      </Link>
    );
  }
}

export default CreateListButton;
