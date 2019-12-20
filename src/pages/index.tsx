import { graphql, PageRendererProps, useStaticQuery, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { rhythm } from "../utils/typography"
import { getFormattedDate } from "../utils/date"

const StyledLink = styled(Link)`
  box-shadow: none;
`

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: ${rhythm(1 / 4)};
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
`

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }: { node }) => {
        const frontmatter = node!.frontmatter!
        const fields = node!.fields!
        const slug = fields.slug!
        const date = getFormattedDate(frontmatter.date)
        // const excerpt = node!.excerpt!

        const title = frontmatter.title || fields.slug
        return (
          <div key={slug}>
            <Title>
              <StyledLink to={slug}>{title}</StyledLink>
            </Title>
            <small>{date}</small>
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
