import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.file.childImageSharp.fluid} 
      title="About Us"
      styleClass='about-background' />
    <Info />
  </Layout>
)


export const query = graphql`
  {
    file(relativePath: {eq: "about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
