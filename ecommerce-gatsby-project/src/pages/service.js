import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/resuable/HeroSection"
import { graphql } from 'gatsby'
import DualInfoblock from "../components/resuable/DualInfoblock"
import Infoblock from "../components/resuable/Infoblock"

const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection image={data.img.childImageSharp.fluid} title={`This is the title`} subtitle={`this is the subtitle`} heroStyleClass={`about-background`}/>
    <DualInfoblock heading="Services we offer"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "blue-green-orange-and-red.jpg" }) {
      childImageSharp {
        fluid {
					...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default ServicePage
