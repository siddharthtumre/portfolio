import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import { Container } from '@mui/material'
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
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Navbar />
      <Container fixed>
        <h1>{pageTitle}</h1>
        {children}
      </Container>
    </div>
  )
}
export default Layout