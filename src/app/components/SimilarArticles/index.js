"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import article_image from "../../assets/table-image.png";
import heart_icon from "../../assets/product-heart-image.png";

const articles = Array(8).fill({
  heartIcon: heart_icon,
  image: article_image,
  category: "Art de la table",
  title: "Sample Title",
  price: "10€",
  details: "0,50€/Pièce · RÉF : ABC123",
  pieces: "20 pièces"
});

export const SimilarArticles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < articles.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="similar-articles-container">
      <div className="similar-articles-heading">
        <p className="similar-articles-heading-left">Articles similaires</p>
        <p className="similar-articles-heading-right">
          Voir toute la collection
        </p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-button prev" onClick={handlePrev}>
          ←
        </button>
        <div className="carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {articles.map((article, index) => (
              <div className="carousel-slide" key={index}>
                <div className="articles">
                  <div className="article-image-container">
                    <div className="article-image-upper">
                      <Image src={article.heartIcon} alt="Heart Icon" />
                      <p>{article.category}</p>
                    </div>
                    <div className="article-image">
                      <Image src={article.image} alt="Article Image" />
                    </div>
                  </div>
                  <div className="article-description-container">
                    <div className="description-title-container">
                      <p className="description-title">{article.title}</p>
                      <p className="description-price">{article.price}</p>
                    </div>
                    <div className="article-details-container">
                      <p className="article-details">{article.details}</p>
                      <p className="article-quantity">{article.pieces}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
};
