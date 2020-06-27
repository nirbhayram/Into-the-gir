import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/resuable/HeroSection"
import { graphql } from 'gatsby'
import Infoblock from "../components/resuable/Infoblock"
import DualInfoblock from "../components/resuable/DualInfoblock"
import CartCourses from "../components/cart/CartCourses"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection image={data.img.childImageSharp.fluid} title={`This is the title`} subtitle={`this is the subtitle`} heroStyleClass={`hero-background`} />
    <Infoblock heading="About us" />
    <CartCourses courses={data.courses} />
    <DualInfoblock heading="Our team" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "background-blur.jpg" }) {
      childImageSharp {
        fluid {
					...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  courses:allContentfulCourses{
    edges {
      node {
        id
        title
        category
        description
        price
        image {
          fixed(width:200, height:120 ){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
