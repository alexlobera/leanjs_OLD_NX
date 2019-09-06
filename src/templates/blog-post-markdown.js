import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'

import { blogAuthors } from '../config/data'
import Ul, { Li } from '../components/layout/Ul'
import { P, Span, H2, H3, H4, H5 } from '../components/text'
import { Link } from '../components/navigation'
import { Video } from '../components/elements'
import {
  Code,
  Blockquote,
  Codesandbox,
  Img,
  Pre,
  Table,
} from '../components/blog/BlockContent'
import Tweet from '../components/blog/Tweet'
import MarketingCard from '../components/curriculum/MarketingCard'
import BlogPost from '../components/blog/BlogPost'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    table: Table,
    p: P,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    ul: Ul,
    li: Li,
    pre: Pre,
    img: Img,
    code: Code,
    span: Span,
    tweet: Tweet,
    blockquote: Blockquote,
    codesandbox: Codesandbox,
    video: Video,
    marketingcard: MarketingCard,
  },
}).Compiler

const Page = ({ data, pageContext: { relatedPosts } }) => {
  const { htmlAst, timeToRead, frontmatter } = data.markdownRemark
  const { title, date, subtitle, author, imageUrl } = frontmatter
  const mainImagePublicUrl = imageUrl
  const authorTwitter = frontmatter.authorTwitter || 'reactgqlacademy'
  const { slug } = data.markdownRemark.fields
  const postTypePath = slug.replace(/^\/([^/]*).*$/, '$1')
  const postTypeLabel = `${postTypePath
    .charAt(0)
    .toUpperCase()}${postTypePath.slice(1)}`

  const body = renderAst(htmlAst)
  const blogPostProps = {
    body,
    postTypeLabel,
    postTypePath,
    slug,
    authorTwitter,
    authorSlug: author,
    authorFullname: blogAuthors[author].fullname,
    authorImageUrl: blogAuthors[author].imgSrc,
    mainImagePublicUrl,
    title,
    date,
    subtitle,
    timeToRead,
    relatedPosts,
  }

  return <BlogPost {...blogPostProps} />
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        subtitle
        author
        imageUrl
        authorTwitter
      }
      fields {
        slug
      }
      htmlAst
      timeToRead
    }
  }
`

export default Page
