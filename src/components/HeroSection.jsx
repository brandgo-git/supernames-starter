import React, { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import _ from "lodash"
import "../css/wave.css"

export default function HeroSection(props) {
  let section = _.get(props, "section", null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  const TEXTS = [
    _.get(section, "looptext_1", null),
    _.get(section, "looptext_2", null),
    _.get(section, "looptext_3", null),
    _.get(section, "looptext_4", null),
  ]

  return (
    <section
      className="content__row content__row--full-width promo__section"
      data-id={_.get(section, "section_id", null)}
    >
      {/* <h1>
        {_.get(section, "before", null)}{" "}
        <TextTransition
          inline={true}
          delay={100}
          noOverflow
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.gentle}
        />
        <span class="hero-title">{_.get(section, "title", null)}</span>{" "}
        <span>{_.get(section, "after", null)} </span>
        <span sx={{ display: `inline-block` }}>
          <TypistLoop interval={1000}>
            {[
              _.get(section, "looptext_1", null),
              _.get(section, "looptext_2", null),
              _.get(section, "looptext_3", null),
              _.get(section, "looptext_4", null),
            ].map(text => (
              <Typist key={text}>
                {_.get(section, "before_loop", null)} {text}
                <Typist.Backspace count={15} delay={2500} />
              </Typist>
            ))}
          </TypistLoop>
        </span>
      </h1> */}
      AAA
      <TextTransition
        inline={true}
        delay={100}
        noOverflow
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.gentle}
      />
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
