import React from "react";

import "./post-add-form.css";

const PostAddForm = () => {
  return (
    <div>
      <input
        className="from-control new-post-label"
        placeholder="Про що думаєте зараз?"
        type="text"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавити
      </button>
    </div>
  );
};

export default PostAddForm;
