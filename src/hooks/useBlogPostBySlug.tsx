import { graphql, useStaticQuery } from "gatsby"
import { Post } from "../utils/types"

interface Props {
  mdx: Post
}

const useBlogPostBySlug = () => {
  const data = useStaticQuery<Props>(graphql`
    query blogPostBySlugAndBlogPostBySlug($slug: String!) {
      mdx(fields: { slug: { eq: $slug } }) {
        id
        excerpt(pruneLength: 160)
        body
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image {
            id
            name
            publicURL
          }
        }
      }
    }
  `)

  return data.mdx
}

export default useBlogPostBySlug
