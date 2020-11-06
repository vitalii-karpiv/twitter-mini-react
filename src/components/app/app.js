import React, { Fragment } from "react";

import "./app.css";

import AppHeader from "../app-header/app-header";
import SearchPaner from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-forms/post-add-forms";

const App = () => {
  return (
    <Fragment>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPaner />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </Fragment>
  );
};

export default App;
