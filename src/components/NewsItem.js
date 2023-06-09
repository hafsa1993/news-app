import React from "react";

export default function NewsItem({author,title,description,urlToImage}) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">1</span>
          <span className="card-author subtle">{author}</span>
          <h4 className="card-title">{title.slice(0,100)}...</h4>
          <span className="card-description subtle">
            {description}
          </span>
          <div className="card-read">Read</div>
        </div>
        <img src={urlToImage} alt="image" className="card-media" />
        <span className="card-tag subtle">Read More</span>
      </div>
    </div>
  );
}
