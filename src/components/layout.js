import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import { Container } from '@mui/material'
import Helmet from 'react-helmet'
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Container fixed>
        <h1>{pageTitle}</h1>
        {children}
      </Container>
    </div>
  )
}
export default Layout