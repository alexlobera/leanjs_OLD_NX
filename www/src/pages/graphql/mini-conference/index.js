import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import StickyBox from 'react-sticky-box'

import LinkButton from 'src/components/buttons/LinkButton'
import { CheckoutProvider } from 'src/components/payment/checkout'
import { Link } from 'src/components/navigation'
import Section, { TopSection, ColSection } from 'src/components/layout/Section'
import Gallery, { massageGalleryImages } from 'src/components/elements/Gallery'
import { Col, Row } from 'src/components/layout/Grid'
import Box from 'src/components/layout/Box'
import Flex from 'src/components/layout/Flex'
import { H2, H3, H4, H5, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import ApolloLogo from 'src/components/logos/Apollo'
import RGAWhiteLogo from 'src/components/logos/RGAWhiteLogo'
import ReactSummitLogo from 'src/components/logos/ReactSummit'
import Guild from 'src/components/logos/Guild'
import Header from 'src/components/layout/Header'
import TwitterIcon from 'src/components/icons/TwitterIcon'
import GitHubIcon from 'src/components/icons/GitHubIcon'
import WebsiteIcon from 'src/components/icons/WebsiteIcon'
import { getPostsFromNodes } from 'src/components/blog/utils'
import BlogSection from 'src/components/blog/BlogSection'

import {
  AlternativeTrainingSection,
  getNextTrainingByTrainingId,
  selectUpcomingTrainings,
  selectNodeById,
} from 'src/components/training'
import { Segment, Image } from 'src/components/elements'
import { GRAPHQL_BOOTCAMP, TECH_GRAPHQL } from 'src/config/data'
import { GRAPHQL_PINK, BLUE, GREY } from 'src/config/styles'
import { createMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import Card from 'src/components/elements/Card'

const REACTSUMMIT_COLOR = '#0f0'

const sponsorsList = [
  {
    element: <ApolloLogo width="100%" height={null} />,
    borderColor: GRAPHQL_PINK,
  },
]

const RGABorderImage = `linear-gradient(to top, ${GRAPHQL_PINK}, ${BLUE}) 1 100%`

const organizersList = [
  {
    element: <ReactSummitLogo width="80%" height={null} fontColor="#000" />,
    borderColor: REACTSUMMIT_COLOR,
  },
  {
    element: <RGAWhiteLogo width="80%" height={null} />,
    borderColor: BLUE,
    borderImage: RGABorderImage,
  },

  {
    element: <Guild width="80%" height={null} />,
    borderColor: GRAPHQL_PINK,
  },
]

const speakers = [
  {
    fullname: 'Tanmai Gopal',
    job: 'CEO & Co-Founder at Hasura',
    imageName: 'tanmai',
    description: `Tanmai Gopal is the CEO, co-founder of Hasura, an open-source technology company that helps modern product teams use GraphQL in cloud-native applications. Prior to Hasura, he ran a niche consulting firm helping enterprises migrate to container-based architectures. He is a fullstack developer whose areas of interest and work span React, GraphQL, Haskell, Postgres & Kubernetes.`,
    links: [
      { url: 'https://twitter.com/tanmaigo', icon: TwitterIcon },
      { url: 'https://github.com/coco98', icon: GitHubIcon },
      { url: 'https://hasura.io/blog/@tanmaig/', icon: WebsiteIcon },
    ],
  },
]

const metas = {
  title: 'Learn GraphQL | React GraphQL Academy',
  description:
    'Interested in learning GraphQL? Learn GrapQL with us. Supercharge your development skill set with the latest curriculum in GraphQL. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const AgendaCard = ({ sx, ...rest }) => (
  <Card
    variant="primary"
    sx={{ mb: 5, borderColor: GRAPHQL_PINK, ...sx }}
    {...rest}
  />
)

const buyExternalUrl = 'https://ti.to'

const GraphQLPage = ({ data, path, trainings }) => {
  const posts = getPostsFromNodes({
    sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
  })
  const trainingsInAmsterdam =
    selectUpcomingTrainings({ trainings, city: 'amsterdam' }) || []
  const crossSellTrainings = [
    getNextTrainingByTrainingId({
      trainings,
      trainingId: '5e349275778e880002113474',
    }),
    getNextTrainingByTrainingId({
      trainings,
      trainingId: '5dc6f35fce62530002bd3e92',
    }),
    getNextTrainingByTrainingId({
      trainings: trainingsInAmsterdam,
      trainingId: '5aa2ab2a7dcc782348ea2011',
    }),
  ].filter(t => t)

  const conference = selectNodeById({
    nodes: trainings,
    id: '5e3e990ae1ac3f000218d377',
  })

  const smallGalleryImages = massageGalleryImages(data.venueImages, 'sm')
  const largeGalleryImages = massageGalleryImages(data.venueImages, 'lg')

  const speakerImages = data.speakerImages.nodes.reduce(
    (acc, { name, childImageSharp }) => {
      acc[name] = childImageSharp.fluid

      return acc
    },
    {}
  )

  const galleryImages = smallGalleryImages.map(
    ({ src, height, width, originalName }, index) => {
      return {
        srcSmall: src,
        srcLarge: largeGalleryImages[index].src,
        height,
        width,
        originalName,
      }
    }
  )
  return (
    <>
      <Helmet
        title={metas.title}
        meta={[
          {
            name: 'description',
            content: metas.description,
          },
        ]}
      >
        {createMetas(metas)}
      </Helmet>
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/graphql', label: 'GraphQL' },
          { to: path, label: 'Mini Conf' },
        ]}
        tech={TECH_GRAPHQL}
        titleLines={['GraphQL Mini Conference Amsterdam April 15, 2020']}
        subtitle={
          <Ul sx={{ mt: 0 }} variants={['unstyled', 'inline']}>
            <Li>150 Attendees</Li>
            <Li>6 Speakers</Li>
            <Li>4 Hours of Fun</Li>
            <Li>1 Evening</Li>
          </Ul>
        }
        bgImageName={'mini-conf'}
        bgColors={[GRAPHQL_PINK, REACTSUMMIT_COLOR]}
        showInfoBox={true}
        training={conference}
        buyLink={buyExternalUrl}
        links={[
          {
            text: 'Speakers',
            to: '#speakers',
          },
          {
            text: 'Sponsors',
            to: '#sponsors',
          },
          {
            text: "What's a Mini Conf",
            to: '#whatisaminiconf',
          },
          {
            text: 'Agenda',
            to: '#agenda',
          },
          {
            text: 'Tickets',
            to: buyExternalUrl,
          },
        ]}
        type={GRAPHQL_BOOTCAMP}
      />
      <TopSection>
        <Segment>
          <Row>
            <Col md={6} mdOffset={1}>
              <H2>
                <a name="speakers" />
                Speakers
              </H2>
              {speakers.map(
                ({ fullname, job, description, links, imageName }) => (
                  <Flex sx={{ mr: 5, mb: 5, pb: 5, flexDirection: 'column' }}>
                    <Flex>
                      <Image
                        circle
                        fluid={speakerImages[imageName]}
                        sx={{
                          width: '120px',
                          height: '120px',
                          mr: 2,
                          mb: 1,
                        }}
                        alt={`${fullname} ${job}`}
                      />
                      <Box>
                        <H4 sx={{ mb: 1 }}>{fullname}</H4>
                        <P sx={{ pb: 1 }}>
                          <strong>{job}</strong>
                        </P>
                        {links && (
                          <Ul variants={['inline', 'unstyled']}>
                            {links.map(({ url, icon: Icon }) => (
                              <Li>
                                <Link to={url}>
                                  <Icon fill={GREY} />
                                </Link>
                              </Li>
                            ))}
                          </Ul>
                        )}
                      </Box>
                    </Flex>
                    <P sx={{ fontSize: 1 }}>{description}</P>
                  </Flex>
                )
              )}
              <H3>
                <a name="speakers" />
                Call For Papers
              </H3>
              <LinkButton to="https://docs.google.com/forms/d/e/1FAIpQLScIvHytKvbO0VjtHeP8ljLg0c9J9IpfDBn8CEllgIgdxhh-cA/viewform">
                Submit your talk
              </LinkButton>
            </Col>
            <Link to="#our-graphql-training" name="our-graphql-training" />
            <Col md={4}>
              <H3>
                <a name="sponsors" />
                Sponsors
              </H3>
              {sponsorsList.map(
                ({ element, borderColor = GRAPHQL_PINK }, index) => (
                  <Card
                    variant="primary"
                    sx={{ borderColor, mb: index > 0 ? 6 : 0 }}
                  >
                    {element}
                  </Card>
                )
              )}
              <H3 sx={{ mb: 6, pt: 5 }}>Organizers</H3>
              <StickyBox offsetTop={120}>
                {organizersList.map(
                  (
                    { element, borderImage, borderColor = GRAPHQL_PINK },
                    index
                  ) => (
                    <Card
                      variant="primary"
                      sx={{ borderImage, borderColor, mt: index > 0 ? 6 : 0 }}
                    >
                      {element}
                    </Card>
                  )
                )}
              </StickyBox>
            </Col>
          </Row>
        </Segment>
      </TopSection>

      <ColSection
        variant="thinRight"
        col={
          <Gallery
            className="pictures-mini-conf-gallery"
            pageLimit={3}
            photos={galleryImages}
          />
        }
        col2={
          <React.Fragment>
            <H2>
              <a name="whatisaminiconf" />
              What is a Mini Conference?
            </H2>
            <P>
              MiniConf is just a shorter version of a Regular conferences you
              got used to.
            </P>
            <P>
              There will be 6 Speakers, 150 attendees, and lots of networking
              and fun!
            </P>
            <P>
              We’ve brought experts from all around the world so you could learn
              about GraphQL best practices and become a part of the GraphQL
              community!
            </P>
          </React.Fragment>
        }
      />
      <Section>
        <Row>
          <Col md={5} mdOffset={4}>
            <H2>
              <a name="agenda" />
              Agenda
            </H2>

            <H3>Registration</H3>
            <AgendaCard>
              <H4>5:30 pm - Doors Open </H4>
              <P>Drinks and networking</P>
            </AgendaCard>

            <H3>Lightning Talks</H3>
            <AgendaCard>
              <H4>6:10 pm - First Lightning Talk</H4>
              <P>TBD</P>
              <H4>6:20 pm - Second Lightning Talk</H4>
              <P>TBD</P>
            </AgendaCard>

            <H3>Talks</H3>
            <AgendaCard>
              <H4>
                6:30 pm - Building a GraphQL backend for a cloud-native era, by
                Tanmai Gopal
              </H4>
              <P>
                In this talk you will get to know how GraphQL works really well
                for monoliths & the problems that arise when taking GraphQL to
                microservice and serverless architectures. You'll see a few
                patterns that can allow for extracting the benefit of GraphQL
                while also keeping the benefits of a microservices/serverless
                architecture.
              </P>
              <H4>7 pm - Second Talk</H4>
              <P>TBD</P>
            </AgendaCard>

            <H3>Break</H3>
            <AgendaCard>
              <H4>7:30 pm - Food and drinks</H4>
            </AgendaCard>

            <H3>Talks</H3>
            <AgendaCard>
              <H4>8:00 pm - Third Talk</H4>
              <P>TBD</P>
              <H4>8:30 pm - Fourth Talk</H4>
              <P>TBD</P>
            </AgendaCard>

            <H3>Networking & Party</H3>
            <AgendaCard sx={{ mb: 0 }}>
              <H4>9:00 pm - 10 pm</H4>
            </AgendaCard>
            <Box sx={{ mt: 6 }}>
              <LinkButton variant="primary" to={buyExternalUrl}>
                Tickets
              </LinkButton>
            </Box>
          </Col>
        </Row>
      </Section>
      <BlogSection variant="dark" title="From our blog" posts={posts} />
      <AlternativeTrainingSection trainings={crossSellTrainings} />
    </>
  )
}

export const query = graphql`
  query {
    sanityNodes: allSanityPost(
      filter: { tags: { elemMatch: { name: { in: ["mini-gql-conf"] } } } }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }
    speakerImages: allFile(
      filter: {
        absolutePath: {
          regex: "/pages/graphql/mini-conference/images/speakers.*.jpg/"
        }
      }
    ) {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    venueImages: allFile(
      filter: {
        absolutePath: {
          regex: "/pages/graphql/mini-conference/images/venue.*.jpg/"
        }
      }
    ) {
      nodes {
        publicURL
        name
        childImageSharp {
          original {
            width
            height
          }
        }
      }
    }
  }
`
export default GraphQLPage
