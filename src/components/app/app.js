import React, { Fragment } from "react";

import "./app.css";

import AppHeader from "../app-header/app-header";
import SearchPaner from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-forms/post-add-forms";

const App = () => {
  const data = [
    { label: "hello", important: true, id: "dad" },
    { label: "How are u?", important: false, id: "dadfdf" },
    { label: "I`m learning React", important: false, id: "dadfdsf" }
  ];

  return (
    <Fragment>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPaner />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </Fragment>
  );
};

export default App;
