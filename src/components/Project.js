// Libraries
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function Project({ project: { id, title, badges, description }, image }) {
  console.log(badges);
  return (
    <section className="project" key={id}>
      <h3 className="project__title title__h3 title__h3--small">«{title}»</h3>
      <GatsbyImage className="project__img"
                   alt="projectImage"
                   image={image} />
      <div className="project__badges">
        {badges.map(badge => (
          <span className="tag article article--tip">
            {badge.content}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Project;