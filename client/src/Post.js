import React from "react";
import "./App.css";

function post(image, title, time, summary, author) {
  return (
    <div className="content">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Picture_%E2%80%93_Heathen_Rock_Festival_2016_08.jpg/1024px-Picture_%E2%80%93_Heathen_Rock_Festival_2016_08.jpg" />
      <div className="details">
        <h1>Virtual bookkeeping is the process Virtual bookkeeping is the</h1>
        <p className="author">
          <span>author name </span>
          <time>13-jan-23</time>
        </p>
        <p className="summary">asdfghjklmnopqrstuvwxyz</p>
      </div>
    </div>
  );
}

export default post;
