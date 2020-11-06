import React from "react";

import "./post-status-filter.css";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-info">Всі</button>
      <button className="btn btn-outline-secondary">Вподобані</button>
    </div>
  );
};

export default PostStatusFilter;
