import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import _ from "lodash"
import "../css/slick.css"

import loadable from "@loadable/component"
const Slider = loadable(() => import("react-slick"))

// const styles = {
//   wrapper: {
//     alignItems: `center`,
//     flexDirection: `row`,
//     width: `full`,
//     p: "0.6rem",
//   },
//   left: {
//     flexBasis: `58%`,
//   },
//   right: {
//     flexBasis: `42%`,
//     textAlign: `right`,
//   },
//   heading: {
//     color: `omegaDark`,
//     fontWeight: `normal`,
//     fontSize: ".875rem",
//   },
// };

var settings = {
  className: "center",
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  speed: 500,
  rows: 2,
  responsive: [
    {
      breakpoint: 1275,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default props => {
  let section = _.get(props, "section", null)

  let { hot } = useStaticQuery(graphql`
    query HotQuery($dateFormat: String) {
      hot: allAirtable(limit: 20) {
        edges {
          node {
            data {
              slug
              date(formatString: $dateFormat)
              title
              status
              price
              logo {
                localFiles {
                  id
                  childImageSharp {
                    gatsbyImageData(width: 300, placeholder: NONE)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const isBrowser = typeof window !== "undefined"
  const [width, setWidth] = React.useState(isBrowser ? window.innerWidth : 0)

  React.useEffect(() => {
    if (!isBrowser) return false
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  // Randomizer
  hot = hot.edges.sort(() => Math.random() - 0.5)

  return (
    <section
      data-id={_.get(section, "section_id", null)}
      className="hot_section"
    ></section>
  )
}
