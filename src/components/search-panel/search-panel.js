import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  updateTerm = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        className="form-controle search-input"
        placeholder="Пошук по записам"
        type="text"
        onChange={this.updateTerm}
      />
    );
  }
}
