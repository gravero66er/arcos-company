// Libraries
import { Link } from "gatsby";
import React from "react";

export default function FooterLink({ title, link }) {
  return (
    <div className="footer__link">
      <Link className="article article--white" to={link}>
        {title}
      </Link>
    </div>
  );
}
