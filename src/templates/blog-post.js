import React from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { P, Span, H2, H2_STYLE, H3_STYLE, H4_STYLE, H5_STYLE, P_STYLE } from '../components/text'
import { ANCHOR_STYLE } from '../components/navigation/'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb, Link } from '../components/navigation'
import { FONT_FAMILY, WHITE } from '../config/styles'
import { Image } from '../components/elements'
import ContactForm from '../components/form/Contact'
import { Card } from '../components/elements'
import { SCREEN_MD_MAX } from '../components/utils'

const Content = styled.div`
  p {
    ${P_STYLE}
  }
  h2 {
    ${H2_STYLE}
  }
  h3 {
    ${H3_STYLE}
  }
  h4 {
    ${H4_STYLE}
  }
  h5 {
    ${H5_STYLE}
  }
  a {
    ${ANCHOR_STYLE}
  }
  ul {
    li {
      ${FONT_FAMILY};
    }
  }
`

const SyledAuthor = styled.div`
  display: flex;
  color: ${WHITE};
  img {
    margin-right: 18px;
    width: 90px;
    height: 90px;
  }
  a {
    display:block;
  } 
`

const PostMeta = ({ author = 'unknown', path = '', imgSrc = '', timeToRead }) => (
  <SyledAuthor>
    <Image src={imgSrc} circle />
    <P>
      <Link to={`/about-us#${path}`}>By {author}</Link>
      <Span>
        Oct 4 <br />
        Reading time: {timeToRead} mins
      </Span>
    </P>
  </SyledAuthor>
)

const SocialUl = styled.ul`
  margin: 15px 0 0 18px;
  > li {
      list-style-type: none;
  }

  @media (max-width: ${SCREEN_MD_MAX}) {
    margin-left: 0;
    > li {
      display:inline-block;
      padding-right: 9px;
    }
  }

`

// const ShareButtons = () => (
//   <SocialUl unstyled>
//     <Li>
//       <TwitterShareButton
//         url={document.location.href}
//         quote={'title'}
//         via="reactjsacademy"
//       >
//         <TwitterIcon
//           size={36}
//           round />
//       </TwitterShareButton>
//     </Li>
//     <Li>
//       <FacebookShareButton
//         url={document.location.href}
//         quote={'title'}
//       >
//         <FacebookIcon
//           size={36}
//           round />
//       </FacebookShareButton>
//     </Li>
//     <Li>
//       <LinkedinShareButton
//         url={document.location.href}
//         quote={'title'}
//       >
//         <LinkedinIcon
//           size={36}
//           round />
//       </LinkedinShareButton>
//     </Li>
//     <Li>
//       <EmailShareButton
//         url={document.location.href}
//         quote={'title'}
//       >
//         <EmailIcon
//           size={36}
//           round />
//       </EmailShareButton>
//     </Li>
//   </SocialUl>
// )

const BlogPost = ({ data }) => {
  const { title, subtitle, author, path, imgSrc } = data.markdownRemark.frontmatter
  const { html, timeToRead } = data.markdownRemark
  const { slug } = data.markdownRemark.fields
  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: `/blog`, label: `Blog` },
          { to: `/${slug}`, label: `${title}` },
        ]}
      />
      <Header
        titleLines={[`${title}`]}
        fullHeight={false}
        paddingBottom={80}
      >
      <PostMeta author={author} path={path} imgSrc={imgSrc} timeToRead={timeToRead}  />
      </Header>
      <Grid>
        <Row>
          {/* <Col md={1}>
            <ShareButtons />
          </Col> */}
          <Col md={6} >
            {subtitle ? <H2>{subtitle}</H2> : null}
            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
          <Col md={4} mdOffset={1}>
            <Card small bg="dark" top={20}>
              <ContactForm simplified/>
            </Card>
            <Card border="shadow" small top={20} >
              Other articles
            </Card>
          </Col>
        </Row>
      </Grid>

      <UpcomingTrainingSection />
    </React.Fragment >
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
        frontmatter {
      title
      subtitle
      author
      path
      imgSrc
    }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
