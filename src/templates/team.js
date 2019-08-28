import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { Blockquote } from '../components/text'
import Section from 'src/components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2Ref, H3, P } from '../components/text'
import Header from '../components/layout/Header'
import Ul, { Li } from '../components/layout/Ul'
import { Video, Image } from '../components/elements'
import { UpcomingTrainingSection } from '../components/training'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils/index'

const CoachTitle = styled(H3)`
  & {
    padding-top: 0;
  }
`
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    ul: Ul,
    li: Li,
  },
}).Compiler

const Coach = ({ data, pageContext: { posts } }) => {
  const {
    name,
    title,
    companyName,
    companyLink,
    gitHub,
    medium,
    twitter,
    linkedIn,
    blockquote,
    youtubeVideoId,
    videoDescription,
    imageDescription,
    imageSrc,
  } = data.markdownRemark.frontmatter
  const coachImgSrc = imageSrc.childImageSharp.fluid.src
  const { htmlAst } = data.markdownRemark
  const linkName = name.toLowerCase().replace(' ', '-')
  const pageTitle = `${name} - ${title} | React GraphQL Academy`
  const metas = {
    title: pageTitle,
    image: coachImgSrc,
    description: blockquote,
    type: 'article',
  }
  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Helmet
            title={pageTitle}
            meta={[
              {
                name: 'description',
                content: blockquote,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Header fullHeight={false} titleLines={[`${name}`]} />
          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  {youtubeVideoId ? (
                    <Video
                      youtubeId={youtubeVideoId}
                      description={<P>{videoDescription}</P>}
                    />
                  ) : (
                    <Image
                      src={coachImgSrc}
                      width="100%"
                      alt={imageDescription}
                    />
                  )}
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2Ref>
                    {name}
                    <Link
                      name={linkName}
                      to={`#${linkName}`}
                      className="coach-profiles"
                    >
                      #
                    </Link>
                  </H2Ref>
                  <CoachTitle>
                    {title} at{' '}
                    <Link to={companyLink} className="coach-profiles">
                      {companyName}
                    </Link>
                  </CoachTitle>
                  <Ul variant="inline">
                    <Li>
                      <Link to={gitHub} className="coach-profiles">
                        GitHub
                      </Link>
                    </Li>
                    <Li>|</Li>
                    {medium && (
                      <React.Fragment>
                        <Li>
                          <Link to={medium} className="coach-profiles">
                            Medium
                          </Link>
                        </Li>
                        <Li>|</Li>
                      </React.Fragment>
                    )}
                    {twitter && (
                      <React.Fragment>
                        <Li>
                          <Link to={twitter} className="coach-profiles">
                            Twitter
                          </Link>
                        </Li>
                        <Li>|</Li>
                      </React.Fragment>
                    )}
                    <Li>
                      <Link to={linkedIn} className="coach-profiles">
                        LinkedIn
                      </Link>
                    </Li>
                  </Ul>
                  {renderAst(htmlAst)}
                  <Blockquote bg="primary" triangle="left">
                    {blockquote}
                  </Blockquote>
                </Col>
              </Row>
            </Grid>
          </Section>
          <BlogSection title={`Articles by ${name}`} posts={posts} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query CoachQuery($slug: String!, $imgMaxWidth: Int!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        title
        companyName
        companyLink
        gitHub
        medium
        twitter
        linkedIn
        blockquote
        youtubeVideoId
        videoDescription
        imageDescription
        imageSrc {
          childImageSharp {
            fluid(maxWidth: $imgMaxWidth) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
      htmlAst
    }
  }
`

export default Coach
