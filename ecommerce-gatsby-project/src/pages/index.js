import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/resuable/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection image={} title={`This is the title`} subtitle={`this is the subtitle`} heroStyleClass={`hero-background`}/>
  </Layout>
)

export default IndexPage
