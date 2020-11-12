import React from "react";

import "./post-add-form.css";

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { onAdd } = this.props;

    return (
      <div className="bottom-panel">
        <input
          className="from-control new-post-label"
          placeholder="Про що думаєте зараз?"
          type="text"
          value={this.state.inputValue}
          onChange={this.onChange}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => {
            onAdd(this.state.inputValue);
            this.setState({ inputValue: "" });
          }}
        >
          Добавити
        </button>
      </div>
    );
  }
}
