import React from 'react'
import styled from 'styled-components'
import Grid, { Col, Row } from '../components/layout/Grid'
import { P, Span, H2, H2_STYLE, H3_STYLE, H4_STYLE, H5_STYLE, P_STYLE } from '../components/text'
import { ANCHOR_STYLE } from '../components/navigation/'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb, Link } from '../components/navigation'
import { FONT_FAMILY, WHITE } from '../config/styles'
import { Image } from '../components/elements'
import {
  RICHARD,
  HORACIO,
  ALEX,
} from '../config/images'
import { RICHARD_MOSS as RICHARD_MOSS_PATH } from '../components/training/TrainingDetails'

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
    margin-top: 20px;
    display:block;
  } 
`

const Author = ({ name = 'Richard Moss', path = RICHARD_MOSS_PATH, imgSrc = RICHARD }) => (
  <SyledAuthor>
    <Image src={imgSrc} circle />
    <P>
      <Link to={`/about-us#${path}`}>By {name}</Link>
      <Span>
        Oct 4
    </Span>
    </P>
  </SyledAuthor>
)

const BlogPost = ({ data }) => {
  const { title, subtitle } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
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
        <Author />
      </Header>
      <Grid>
        <Row>
          <Col md={6} mdOffset={1}>
            {subtitle ? <H2>{subtitle}</H2> : null}
            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
          <Col md={3} mdOffset={1}>
            right column
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
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
    }
      fields {
        slug
      }
      html
    }
  }
`

export default BlogPost
