import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components'


import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledDiv = styled.div`
width: 100px;
height: 100px;
background-color: peru`
;


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StyledDiv />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
