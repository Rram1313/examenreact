import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card/card"

const Contacto = () => (
  <Layout>
    <h1>Contacto</h1>
    <div className="containerCard">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contacto" />

export default Contacto
