import { graphql, useStaticQuery } from "gatsby"

interface Props {
  site: {
    siteMetadata: {
      navigation: Array<{
        title: string
        slug: string
      }>
    }
  }
}

const useNavigation = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          navigation {
            title
            slug
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.navigation
}

export default useNavigation
