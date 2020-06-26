import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({ image, title, subtitle, heroStyleClass }) {
    // <StaticQuery
    //     query={graphql`
    //   query {
    //     desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
    //       childImageSharp {
    //         fluid(quality: 90, maxWidth: 1920) {
    //           ...GatsbyImageSharpFluid_withWebp
    //         }
    //       }
    //     }
    //   }
    // `}
    //     render={data => {
    //         // Set ImageData.
    //         const imageData = data.desktop.childImageSharp.fluid
    //         return (
    //             <BackgroundImage
    //                 Tag="section"
    //                 className={heroStyleClass}
    //                 fluid={image}
    //                 backgroundColor={`#040e18`}
    //             >
    //                 <h2 className="text-white text-uppercase">{title}</h2>
    //                 <div>
    //                     <h4 className="text-warning">{subtitle}</h4>
    //                 </div>
    //             </BackgroundImage>
    //         )
    //     }}
    // />
    return (
        <BackgroundImage
            Tag="section"
            className={heroStyleClass}
            fluid={image}
            backgroundColor={`#040e18`}
        >
            <h2 className="text-white text-uppercase text-center">{title}</h2>
            <div>
                <h4 className="text-warning text-center">{subtitle}</h4>
            </div>
        </BackgroundImage>
    )
}
