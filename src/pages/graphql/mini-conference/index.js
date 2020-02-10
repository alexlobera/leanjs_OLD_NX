import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import StickyBox from 'react-sticky-box'

import { LinkButton } from 'src/components/buttons'
import { CheckoutProvider } from 'src/components/payment/checkout'
import PaymentSection from 'src/components/payment/PaymentSection'
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
  //   {
  //     fullname: 'Alex Lobera',
  //     job: 'Head Coach at React GraphQL Academy',
  //     imageSrc:
  //       'https://pbs.twimg.com/profile_images/1208906846313934848/6h0aRCgw_400x400.jpg',
  //     description:
  //       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  //     links: [
  //       { url: '', icon: TwitterIcon },
  //       { url: '', icon: GitHubIcon },
  //       { url: '', icon: WebsiteIcon },
  //     ],
  //   },
  //   {
  //     fullname: 'Alex Lobera',
  //     job: 'Head Coach at React GraphQL Academy',
  //     imageSrc:
  //       'https://pbs.twimg.com/profile_images/1208906846313934848/6h0aRCgw_400x400.jpg',
  //     description:
  //       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  //     links: [
  //       { url: '', icon: TwitterIcon },
  //       { url: '', icon: GitHubIcon },
  //       { url: '', icon: WebsiteIcon },
  //     ],
  //   },
  //   {
  //     fullname: 'Alex Lobera',
  //     job: 'Head Coach at React GraphQL Academy',
  //     imageSrc:
  //       'https://pbs.twimg.com/profile_images/1208906846313934848/6h0aRCgw_400x400.jpg',
  //     description:
  //       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  //     links: [
  //       { url: '', icon: TwitterIcon },
  //       { url: '', icon: GitHubIcon },
  //       { url: '', icon: WebsiteIcon },
  //     ],
  //   },
  //   {
  //     fullname: 'Alex Lobera',
  //     job: 'Head Coach at React GraphQL Academy',
  //     imageSrc:
  //       'https://pbs.twimg.com/profile_images/1208906846313934848/6h0aRCgw_400x400.jpg',
  //     description:
  //       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  //     links: [
  //       { url: '', icon: TwitterIcon },
  //       { url: '', icon: GitHubIcon },
  //       { url: '', icon: WebsiteIcon },
  //     ],
  //   },
  //   {
  //     fullname: 'Alex Lobera',
  //     job: 'Head Coach at React GraphQL Academy',
  //     imageSrc:
  //       'https://pbs.twimg.com/profile_images/1208906846313934848/6h0aRCgw_400x400.jpg',
  //     description:
  //       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  //     links: [
  //       { url: '', icon: TwitterIcon },
  //       { url: '', icon: GitHubIcon },
  //       { url: '', icon: WebsiteIcon },
  //     ],
  //   },
  //   {
  //     fullname: 'Alex Lobera',
  //     job: 'Head Coach at React GraphQL Academy',
  //     imageSrc:
  //       'https://pbs.twimg.com/profile_images/1208906846313934848/6h0aRCgw_400x400.jpg',
  //     description:
  //       'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  //     links: [
  //       { url: '', icon: TwitterIcon },
  //       { url: '', icon: GitHubIcon },
  //       { url: '', icon: WebsiteIcon },
  //     ],
  //   },
]

const metas = {
  title: 'GraphQL Mini Conference | React GraphQL Academy',
  description:
    'New GraphQL Mini Conference! Have fun, network with like-minded people, and learn GrapQL with us!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const renderSpeaker = ({ imageSrc, fullname, job, description, links }) => (
  <Flex sx={{ mr: 5, mb: 5, pb: 5, flexDirection: 'column' }}>
    <Flex>
      <Image
        circle
        src={imageSrc}
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

const AgendaCard = ({ sx, ...rest }) => (
  <Card
    variant="primary"
    sx={{ mb: 5, borderColor: GRAPHQL_PINK, ...sx }}
    {...rest}
  />
)

const GraphQLPage = ({ data, path, trainings }) => {
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

  const smallGalleryImages = massageGalleryImages(data.images, 'sm')
  const largeGalleryImages = massageGalleryImages(data.images, 'lg')

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
    <CheckoutProvider>
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
            to: '#pricing',
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
              {speakers.map(renderSpeaker)}
              <H3>
                <a name="speakers" />
                Call For Papers
              </H3>
              <LinkButton>Submit your talk</LinkButton>
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
          <Col md={4} mdOffset={4}>
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
              <H4>6:30 pm - First Talk</H4>
              <P>TBD</P>
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
          </Col>
        </Row>
      </Section>
      <Section variant="dark">
        <Row>
          <Col md={5} mdOffset={1}>
            <PaymentSection item={conference} />
          </Col>
          <Col md={4} mdOffset={1} sx={{ pt: 3 }}>
            <H3>Discounts? Query them!</H3>
          </Col>
        </Row>
      </Section>
      <AlternativeTrainingSection trainings={crossSellTrainings} />
    </CheckoutProvider>
  )
}

export const query = graphql`
  query {
    images: allFile(
      filter: {
        absolutePath: { regex: "/pages/graphql/mini-conference/.*.jpg/" }
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
