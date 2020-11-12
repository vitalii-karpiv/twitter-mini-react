import React, { Fragment } from "react";
import nextId from "react-id-generator";

import "./app.css";

import AppHeader from "../app-header/app-header";
import SearchPaner from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-forms/post-add-forms";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { label: "hello", important: true, id: "dad" },
        { label: "How are u?", important: false, id: "dadfdf" },
        { label: "I`m learning React", important: false, id: "dadfdsf" }
      ]
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      let newArray = data.slice();

      newArray.splice(index, 1);

      return {
        data: newArray
      };
    });
  };

  addItem = (body) => {
    let newId = nextId();
    this.setState(({ data }) => {
      let newArray = data.slice();

      newArray.push({ label: body, important: false, id: newId });
      console.log(newArray);
      return {
        data: newArray
      };
    });
  };

  render() {
    return (
      <Fragment>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPaner />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </Fragment>
    );
  }
}
