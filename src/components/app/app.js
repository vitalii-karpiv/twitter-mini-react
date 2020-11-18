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
        { label: "hello", important: true, like: false, id: "21321" },
        { label: "How are u?", important: false, like: false, id: "dadfdf" },
        {
          label: "I`m learning React",
          important: false,
          like: false,
          id: "dadfdsf"
        }
      ],
      term: "",
      filter: "all"
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

  onToggleLike = (id) => {
    this.setState(({ data }) => {
      console.log("liked");
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];

      const newItem = { ...old, like: !old.like };

      const newArray = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];

      return { data: newArray };
    });
  };

  searchPost = (posts, term) => {
    if (posts.length === 0) {
      return posts;
    }

    return posts.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPosts = (posts, filter) => {
    if (filter === "like") {
      return posts.filter((item) => item.like);
    } else {
      return posts;
    }
  };

  onSetFilter = (filter) => {
    this.setState({ filter });
    console.log(this.state.filter);
  };

  render() {
    const { data, term, filter } = this.state;

    const total = data.length;
    const liked = data.filter((elem) => elem.like).length;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <Fragment>
        <AppHeader totalElem={total} likedElem={liked} />
        <div className="search-panel d-flex">
          <SearchPaner onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter filter={filter} onSetFilter={this.onSetFilter} />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onLike={this.onToggleLike}
        />
        <PostAddForm onAdd={this.addItem} />
      </Fragment>
    );
  }
}
