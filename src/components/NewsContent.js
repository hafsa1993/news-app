import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function NewsContent({ category }) {
  const [articles, setArticles] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
      );
      if (!response.ok) throw new Error("Error fetching data");
      let json = await response.json();
      setArticles(json.articles);
      setShowSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {showSpinner ? (
        <Spinner />
      ) : (
        <div className="main-card-container">
          {articles.map((i) => {
            if (i.description && i.urlToImage) {
              return <NewsItem key={i.url} {...i} />;
            }
          })}
        </div>
      )}
    </>
  );
}
