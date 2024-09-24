import * as React from "react"
import "./card.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Card = ({
  imageData,
  title = "Titulo",
  description = "Descripción",
  link = "+info",
}) => {
  return (
    <div className="card">
      <figure>
        <GatsbyImage image={imageData} alt={title} className="img" />
      </figure>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link} className="link">
        <button className="btn">+info</button>
      </Link>
    </div>
  )
}

export default Card
