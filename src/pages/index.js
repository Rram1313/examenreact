import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
  

const IndexPage = () => (
  <Layout>
    <h1>Inicio</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore sequi iusto aut ex asperiores vero voluptate cupiditate ducimus! Laboriosam qui maxime eaque quas consequatur, reprehenderit quos nam. Suscipit, soluta!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nihil commodi dolores incidunt ea fugiat est laboriosam. Non soluta enim eum, eligendi deserunt sit nulla aliquam eaque tempore. Accusantium, blanditiis.</p>
    <br/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nihil commodi dolores incidunt ea fugiat est laboriosam. Non soluta enim eum, eligendi deserunt sit nulla aliquam eaque tempore. Accusantium, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore sequi iusto aut ex asperiores vero voluptate cupiditate ducimus! Laboriosam qui maxime eaque quas consequatur, reprehenderit quos nam. Suscipit, soluta!</p>
  </Layout>
)

export const Head = () => <Seo title="Inicio" />

export default IndexPage
