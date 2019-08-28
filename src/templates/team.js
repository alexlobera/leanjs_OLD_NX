import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Link from '../components/navigation/Link'
import Teamquote from '../components/text/Teamquote'
import Section from 'src/components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2Ref, H3, P } from '../components/text'
import Header from '../components/layout/Header'
import Ul, { Li } from '../components/layout/Ul'
import { Video, Image } from '../components/elements'
import { UpcomingTrainingSection } from '../components/training'
import BlogSection from 'src/components/blog/BlogSection'
import { createSocialMetas } from 'src/components/utils/index'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    ul: Ul,
    li: Li,
  },
}).Compiler

const ProfileLink = ({ link, text, first = false }) =>
  link && (
    <React.Fragment>
      {!first && <Li>|</Li>}
      <Li>
        <Link to={link} className="coach-profiles">
          {text}
        </Link>
      </Li>
    </React.Fragment>
  )

const Coach = ({ data, pageContext: { posts } }) => {
  const {
    name,
    title,
    companyName,
    companyLink,
    gitHub,
    medium,
    twitter,
    instagram,
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
                  <H3 pt={0}>
                    {title} at{' '}
                    <Link to={companyLink} className="coach-profiles">
                      {companyName}
                    </Link>
                  </H3>
                  <Ul variant="inline">
                    <ProfileLink first link={gitHub} text="GitHub" />
                    <ProfileLink link={medium} text="Medium" />
                    <ProfileLink link={twitter} text="Twitter" />
                    <ProfileLink link={linkedIn} text="LinkedIn" />
                    <ProfileLink link={instagram} text="Instagram" />
                  </Ul>
                  {renderAst(htmlAst)}
                  <Teamquote blockquote={blockquote} mt={5} />
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
        instagram
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
