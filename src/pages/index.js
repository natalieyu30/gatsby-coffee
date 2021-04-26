import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'


const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.file.childImageSharp.fluid} />
    <Info />
  </Layout>
)


export const query = graphql`
  {
    file(relativePath: {eq: "coffee2.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
