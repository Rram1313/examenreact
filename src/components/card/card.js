import * as React from "react"
import "./card.css"

const Card = ({ img = "https://picsum.photos/200/300", title = "Titulo", decription = "Descripción", btn = "+info"}) => {
  return (
    <div className="card">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <h2>{title}</h2>
      <p>{decription}</p>
      <button className="btn">{btn}</button>
    </div>
  )
}

export default Card