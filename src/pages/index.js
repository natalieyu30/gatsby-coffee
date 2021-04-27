import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.file.childImageSharp.fluid} />
    <Info />
    <Menu items={data.menu.nodes}/>
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
    menu: allContentfulCoffeeItem(sort: {fields: category, order: ASC}) {
      nodes {
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width: 80, height: 80) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
`

export default IndexPage
