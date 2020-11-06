import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <input
      className="form-controle search-input"
      placeholder="Пошук по записам"
      type="text"
    />
  );
};

export default SearchPanel;
