import React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import "../styles/site.scss"
import "../styles/layout.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="m-0 text-4xl text-center">
      Nova Scales Bidding List, please login to view the list.
    </h1>
  </Layout>
)

export default IndexPage
