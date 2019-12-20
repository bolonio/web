import { graphql, useStaticQuery } from "gatsby"

interface Props {
  site: {
    siteMetadata: {
      title: string
      author: string
      description: string
      social: {
        twitter: string
        github: string
        linkedin: string
        instagram: string
      }
      blogPath: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          social {
            twitter
            github
            linkedin
            instagram
          }
          blogPath
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
