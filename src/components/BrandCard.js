import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function BrandCard({ title, description, image }) {
  return (
    <section className="brand__card">
      <h3 className="title__h3">{title}</h3>
      <p className="article">{description}</p>
      <GatsbyImage image={image} alt="image" />
      <Link
        className="brand__button"
        target="_blank"
        rel="norefer"
        to={"https://www.td-arcos.ru/catalog/"}
      >
        Перейти в магазин
      </Link>
    </section>
  );
}

export default BrandCard;