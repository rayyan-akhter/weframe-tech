import Image from "next/image";
import React from "react";
import product_image from "../../assets/product-image.png";
import heart from "../../assets/product-heart-image.png";
import scale_icon1 from "../../assets/scale-icon.png";
import scale_icon2 from "../../assets/scale2-icon.png";
import "./style.css";
export const Product = () => {
  return (
    <div className="products-conatiner">
      <div className="navigation">
        <p>Home</p>/<p>Art de la table</p>
      </div>
      <div className="product-second-container">
        <div className="product">
          <div className="product-image-container">
            <Image src={product_image} alt="product" className="product-image" />
          </div>
          <div className="product-details">
            <div className="first-container">
              <div className="product-title-container">
                <div className="product-title">
                  Cheese - appareil à raclette 1/2 roue
                  <Image src={heart} alt="product" />
                </div>
                <div className="product-price">
                  <p className="price">39,50€</p>
                  <p className="piece">/ pièce</p>
                </div>
              </div>
              <div className="line" />
              <div className="product-scale-container">
                <div className="scale-left">
                  <div className="scale">
                    <Image src={scale_icon1} alt="product" />
                    20cm
                  </div>
                  <div className="scale">
                    <Image src={scale_icon2} alt="product" />
                    50cm
                  </div>
                </div>
                <div className="referal">RÉF : VABGN5</div>
              </div>
              <div className="line" />
              <div className="product-about-conatiner">
                <div className="about-first">
                  <p>
                    Location appareil à raclette - Raclette traditionnelle 1/2
                    roue
                  </p>
                  <p>Réglable en hauteur</p>
                  <p>Appareil à raclette professionnel</p>
                  <p>Boîtier de chauffe horizontal réglable en hauteur</p>
                </div>
                <div className="about-second">
                  <p>220V</p>
                  <p>900W</p>
                </div>
              </div>
            </div>
            <div className="product-button-container">
              <div className="line" />
              <div className="product-buttons">
                <div className="add-button">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                <div className="add-to-cart-button">Ajouter au panier</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-description-container">
          <div className="description-container">
            <div className="description-heading"> Description produit</div>
            <div className="description">
              Festi vous propose à la location un/une Jewel - grand
              couteau/10pc pour votre événement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d anniversaire ou
              du personnel, ce produit a fait l objet d une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
               VAJGC . Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver toute une série d autres produits à louer de
              ce type dans la catégorie  Art de la Table .
            </div>
          </div>
          <div className="questions-container">
            <div className="questions">
              <p>Livraisons</p>
              <p>+</p>
            </div>
            <div className="questions">
              <p>Questions</p>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
