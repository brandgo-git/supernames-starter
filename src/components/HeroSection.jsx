import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import _ from "lodash"
import "../css/wave.css"

export default function HeroSection(props) {
  let section = _.get(props, "section", null)
  return (
    <section
      className="content__row content__row--full-width promo__section"
      data-id={_.get(section, "section_id", null)}
    >
      <div className="hero-wave">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </section>
  )
}
