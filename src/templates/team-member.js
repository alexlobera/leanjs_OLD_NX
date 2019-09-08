import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BlockContent from '@sanity/block-content-to-react'

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
import getPostsFromNodes from 'src/components/blog/getPostsFromNodes'
import { createSocialMetas } from 'src/components/utils/index'

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

const serializers = {
  marks: {
    link: ({ mark: { href }, children }) => (
      <Link to={href} children={children} />
    ),
  },
  list: ({ children }) => <Ul children={children} />,
  listItem: ({ children = {} }) => <Li children={children} />,
}

const TeamMember = ({ data }) => {
  const {
    fullname,
    username,
    _rawDescription,
    jobTitle,
    companyName,
    companyLink,
    gitHub,
    medium,
    twitter,
    instagram,
    linkedIn,
    blockquote,
    youtubeVideo,
    image,
    coverImage,
  } = data.getTeamMember
  const coachImgSrc =
    image &&
    image.asset &&
    image.asset.localFile &&
    image.asset.localFile.publicURL

  const coverImgUrl =
    coverImage &&
    coverImage.asset &&
    coverImage.asset.localFile &&
    coverImage.asset.localFile.publicURL

  const linkName = username.current || 'username'
  const pageTitle = `${fullname} - ${jobTitle} | React GraphQL Academy`
  const metas = {
    title: pageTitle,
    image: coachImgSrc,
    description: blockquote,
    type: 'article',
  }

  const posts = getPostsFromNodes({
    markdownNodes: data.markdownPosts && data.markdownPosts.nodes,
    sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
  })

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
          <Header
            bgImgUrl={coverImgUrl}
            fullHeight={false}
            titleLines={[`${fullname}`]}
          />
          <Section>
            <Grid>
              <Row>
                <Col md={5}>
                  {youtubeVideo && youtubeVideo.videoId ? (
                    <Video
                      youtubeId={youtubeVideo.videoId}
                      description={<P>{youtubeVideo.description}</P>}
                    />
                  ) : (
                    <Image src={coachImgSrc} width="100%" alt={pageTitle} />
                  )}
                </Col>
                <Col md={5} mdOffset={1}>
                  <H2Ref>
                    {fullname}
                    <Link
                      name={linkName}
                      to={`#${linkName}`}
                      className="coach-profiles"
                    >
                      #
                    </Link>
                  </H2Ref>
                  <H3 pt={0}>
                    {jobTitle && `${jobTitle} at`}{' '}
                    {companyLink && (
                      <Link to={companyLink} className="coach-profiles">
                        {companyName}
                      </Link>
                    )}
                  </H3>
                  <Ul variant="inline">
                    <ProfileLink
                      first
                      link={gitHub && `https://github.com/${gitHub}`}
                      text="GitHub"
                    />
                    <ProfileLink
                      link={medium && `https://medium.com/@${medium}`}
                      text="Medium"
                    />
                    <ProfileLink
                      link={twitter && `https://twitter.com/${twitter}`}
                      text="Twitter"
                    />
                    <ProfileLink link={linkedIn} text="LinkedIn" />
                    <ProfileLink
                      link={
                        instagram && `https://www.instagram.com/${instagram}`
                      }
                      text="Instagram"
                    />
                  </Ul>
                  <BlockContent
                    blocks={_rawDescription}
                    serializers={serializers}
                  />
                  <Teamquote blockquote={blockquote} mt={5} />
                </Col>
              </Row>
            </Grid>
          </Section>
          <BlogSection title={`Latest articles by ${fullname}`} posts={posts} />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query TeamMemberQuery($username: String!) {
    getTeamMember: sanityPerson(username: { current: { eq: $username } }) {
      fullname
      username {
        current
      }
      _rawDescription(resolveReferences: { maxDepth: 5 })
      image {
        asset {
          localFile(width: 500) {
            publicURL
          }
        }
      }
      coverImage {
        asset {
          localFile(width: 1200) {
            publicURL
          }
        }
      }
      jobTitle
      companyName
      companyLink
      twitter
      gitHub
      medium
      instagram
      linkedIn
      blockquote
      youtubeVideo {
        videoId
        description
      }
    }

    markdownPosts: allMarkdownRemark(
      filter: {
        frontmatter: { contentType: { eq: "blog" }, author: { eq: $username } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        ...MarkdownPostItemFragment
      }
    }

    sanityNodes: allSanityPost(
      filter: { author: { username: { current: { eq: $username } } } }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }
  }
`

export default TeamMember
