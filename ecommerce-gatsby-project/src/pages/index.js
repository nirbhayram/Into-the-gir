import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/resuable/HeroSection"
import { graphql } from 'gatsby'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection image={data.img.childImageSharp.fluid} title={`This is the title`} subtitle={`this is the subtitle`} heroStyleClass={`hero-background`}/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
					...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default IndexPage
