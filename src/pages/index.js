import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bio from '../data/bio.yml'

//query skills, bio, contact info, image?

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>{bio.name}</div>
  </Layout>
)

export default IndexPage
