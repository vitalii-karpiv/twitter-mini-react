import React from "react";

import "./post-list-item.css";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      important: false
    };
  }

  toggleImportant = () => {
    this.setState(({ important }) => ({
      important: !important
    }));
  };

  render() {
    const { label, onDelete, onLike, like } = this.props;
    const { important } = this.state;

    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }

    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-item-center">
          <button
            type="submit"
            className="btn-star btn-sm"
            onClick={this.toggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="submit" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
