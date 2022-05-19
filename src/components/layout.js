import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
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
      <main className='container mx-auto px-4'>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout