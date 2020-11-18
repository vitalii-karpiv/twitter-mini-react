import React from "react";

import "./app-header.css";

const AppHeader = ({ totalElem, likedElem }) => {
  return (
    <div className="app-header d-flex">
      <h1>Віталій Карпів</h1>
      <h2>
        {totalElem} поста, з них сподобалось {likedElem}
      </h2>
    </div>
  );
};

export default AppHeader;
