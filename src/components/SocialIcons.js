// Libraries
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function SocialIcons() {
  return (
    <div className="social__icons">
      <a
        href="https://www.instagram.com/gk_arcos/"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/inst.png"
          alt="instagram"
          width={30}
          placeholder="tracedSVG"
        />
      </a>
      <a
        href="https://www.facebook.com/arcosTD"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../images/fb.png"
          alt="facebook"
          width={30}
          placeholder="tracedSVG"
        />
      </a>
      <a href="https://vk.com/arcos_td" target="_blank" rel="noreferrer">
        <StaticImage
          src="../images/vk.png"
          alt="vk"
          width={30}
          placeholder="tracedSVG"
        />
      </a>
    </div>
  )
}
