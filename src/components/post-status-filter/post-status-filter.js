import React, { Component } from "react";

import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);

    this.buttons = [
      { name: "all", label: "Всі" },
      { name: "like", label: "Вподобані" }
    ];
  }
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onSetFilter } = this.props;
      const active = filter === name;
      const clazz = active ? "btn btn-info" : "btn btn-outline-secondary";
      return (
        <button key={name} className={clazz} onClick={() => onSetFilter(name)}>
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
