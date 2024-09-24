import * as React from "react"
import Card from "../components/card/card"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Contacto = ({ data }) => (
  <Layout>
    <h1>Contacto</h1>
    <div className="containerCard">
      {data.allDataJson.edges.map(({ node }) => {
        const imageData = getImage(node.image)
        return (
          <Card
            key={node.id}
            imageData={imageData}
            title={node.title}
            description={node.description}
            link={node.link}
          />
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          id
          title
          link
          description
          image {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                width: 300
                placeholder: DOMINANT_COLOR
                aspectRatio: 1.77
              )
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Contacto" />

export default Contacto
