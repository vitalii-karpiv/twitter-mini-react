import React from "react";

import "./post-add-form.css";

const PostAddForm = ({ onAdd }) => {
  return (
    <div className="bottom-panel">
      <input
        className="from-control new-post-label"
        placeholder="Про що думаєте зараз?"
        type="text"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd("hello")}
      >
        Добавити
      </button>
    </div>
  );
};

export default PostAddForm;
