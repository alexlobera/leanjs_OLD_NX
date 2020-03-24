import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import StickyBox from 'react-sticky-box'

import LinkButton from 'src/components/buttons/LinkButton'
import { Link } from 'src/components/navigation'
import Section, { TopSection, ColSection } from 'src/components/layout/Section'
import Gallery, { massageGalleryImages } from 'src/components/elements/Gallery'
import { Col, Row } from 'src/components/layout/Grid'
import Box from 'src/components/layout/Box'
import Flex from 'src/components/layout/Flex'
import { H2, H3, H4, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import GatsbyLogo from 'src/components/logos/Gatsby'
import RGAWhiteLogo from 'src/components/logos/RGAWhiteLogo'
import ReactSummitLogo from 'src/components/logos/ReactSummit'
import Header from 'src/components/layout/Header'
import TwitterIcon from 'src/components/icons/TwitterIcon'
import GitHubIcon from 'src/components/icons/GitHubIcon'
import WebsiteIcon from 'src/components/icons/WebsiteIcon'
import { getPostsFromNodes, sortingPostsByTag } from 'src/components/blog/utils'
import BlogSection from 'src/components/blog/BlogSection'

import {
  AlternativeTrainingSection,
  getNextTrainingByTrainingId,
  selectUpcomingTrainings,
  selectNodeById,
} from 'src/components/training'
import { Segment, Image } from 'src/components/elements'
import { TECH_JAMSTACK } from 'src/config/data'
import { JAMSTACK_GREEN, GRAPHQL_PINK, BLUE, GREY } from 'src/config/styles'
import { createMetas } from 'src/components/utils'
import Card from 'src/components/elements/Card'

const GATSBY_COLOR = 'rgb(102, 51, 153)'
const REACTSUMMIT_COLOR = '#0f0'

// const callForPapersLink =
//   'https://docs.google.com/forms/d/e/1FAIpQLScIvHytKvbO0VjtHeP8ljLg0c9J9IpfDBn8CEllgIgdxhh-cA/viewform'

// const sponsorsList = [
//   {
//     element: <ApolloLogo width="100%" height={null} />,
//     borderColor: JAMSTACK_GREEN,
//   },
// ]

const RGABorderImage = `linear-gradient(to top, ${GRAPHQL_PINK}, ${BLUE}) 1 100%`

const organizersList = [
  {
    element: <ReactSummitLogo width="80%" height={null} fontColor="#000" />,
    borderColor: REACTSUMMIT_COLOR,
  },
  {
    element: <GatsbyLogo width="80%" height={null} />,
    borderColor: GATSBY_COLOR,
  },
  {
    element: <RGAWhiteLogo width="80%" height={null} />,
    borderColor: BLUE,
    borderImage: RGABorderImage,
  },
]

const speakers = [
  {
    fullname: 'Alexandra Spalato',
    job: 'Сo-founder and developer at gatsbywpthemes.com',
    imageName: 'alexandra',
    description: `Alexandra Spalato is on a mission to evangelize the power of Gatsby to the WordPress community as she is convinced that it is the future. She is a freelance developer and entrepreneur with several years of experience working as a WordPress expert at Codeable and has helped many clients around the world by building their online presence through high-quality custom theme development. 
    Alexandra has decided to completely focus on Gatsby and is involved in the development of Gatsby WordPress themes at https://gatsbywpthemes.com/.`,
    links: [{ url: 'https://twitter.com/alexadark', icon: TwitterIcon }],
  },
  {
    fullname: 'Jason Lengstorf',
    job: 'Dev Experience at @Netlify',
    imageName: 'jason',
    description: `Jason Lengstorf is a principal developer experience engineer at Netlify and the host of Learn With Jason, a live-streamed video show where he pairs with people in the community to learn something new. He’s passionate about building healthy, efficient teams and systems, and he’s done his best to positively influence the community, leadership, and technical health of open source and companies including Gatsby and IBM. He lives in Portland, Oregon and writes at lengstorf.com.`,
    links: [
      { url: 'https://twitter.com/jlengstorf', icon: TwitterIcon },
      { url: 'https://github.com/jlengstorf', icon: GitHubIcon },
      { url: 'https://lengstorf.com/', icon: WebsiteIcon },
    ],
  },
  {
    fullname: 'Sid Chatterjee',
    job: 'Senior Software Engineer at GatsbyJS',
    imageName: 'sid',
    description: `Core team at Gatsby. When he isn't writing code, Sid enjoys scuba diving, reading and lazing with his dogs. He lives in Mumbai, India and writes at sidhartha.dev.`,
    links: [
      { url: 'https://twitter.com/chatsidhartha', icon: TwitterIcon },
      { url: 'https://github.com/sidharthachatterjee', icon: GitHubIcon },
    ],
  },
  {
    fullname: 'Charlie Gerard',
    job: 'Senior front-end dev @Netlify',
    imageName: 'charlie',
    description: `Charlie is a front-end developer at Netlify, a Mozilla Tech Speaker and Google Developer Expert in Web Technologies. She is passionate about creative coding and building interactive prototypes mixing science, art and technology. She also spends time giving back to the community by mentoring new developers, contributing to open-source projects, and speaking at conferences.`,
    links: [
      { url: 'https://twitter.com/devdevcharlie', icon: TwitterIcon },
      { url: 'https://github.com/charliegerard', icon: GitHubIcon },
      { url: 'https://charliegerard.github.io/', icon: WebsiteIcon },
    ],
  },
  {
    fullname: 'Alex Lobera',
    job: 'Head Coach & Founder at React GraphQL Academy',
    imageName: 'alex',
    description: `Experienced Full-stack Developer passionate about JavaScript, React and GraphQL. 15 years of experience in the software industry. Interested in digital products that make a social impact.`,
    links: [
      { url: 'https://twitter.com/alex_lobera', icon: TwitterIcon },
      { url: 'https://github.com/alexlbr', icon: GitHubIcon },
    ],
  },
  {
    fullname: 'JJ Kasper',
    job: 'Software Engineer on Next.js core team',
    imageName: 'jj',
    description: `JJ is a Software Engineer at ZEIT on the Next.js core team. He is passionate about building great development and user experiences by leveraging open-source technology. He really enjoys getting to learn about the latest developments in tech and finding ways to apply these developments throughout his work.`,
    links: [
      { url: 'https://twitter.com/_ijjk', icon: TwitterIcon },
      { url: 'https://github.com/ijjk', icon: GitHubIcon },
    ],
  },
]

const metas = {
  title: 'JAMstack MiniConf Amsterdam | React GraphQL Academy',
  description:
    'Interested in learning more about JAMstack and connecting to its community? Join us at the JAMstack MiniConf!',
  imageFullPublicUrl:
    'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Fmini-confs%2Fpic-jamstack-mini-conf-min.png?alt=media',
  type: 'website',
}

const buyExternalUrl =
  'https://ti.to/gitnation/jamstack-mini-conference-2020-react-summit'

const AgendaCard = ({ sx, ...rest }) => (
  <Card
    variant="primary"
    sx={{ mb: 5, borderColor: JAMSTACK_GREEN, ...sx }}
    {...rest}
  />
)

const GraphQLPage = ({
  data,
  path,
  trainings,
  conferenceId = '5e5104235d8b760002b9a3ba',
}) => {
  // TODO MEMOIZE getPostsFromNodes
  const posts = getPostsFromNodes({
    sanityNodes: ((data.sanityNodes && data.sanityNodes.nodes) || []).sort(
      sortingPostsByTag('featured-jamstack-conf-')
    ),
  })

  const relatedTrainingInstance = [
    { trainingId: '5e349275778e880002113474', trainings },
    { trainingId: '5dc6f35fce62530002bd3e92', trainings },
    {
      trainingId: '5aa2ab2a7dcc782348ea2011',
      trainings: (
        selectUpcomingTrainings({ trainings, city: 'amsterdam' }) || []
      ).slice(0, 3),
    },
  ]

  const crossSellTrainings = relatedTrainingInstance
    .map(getNextTrainingByTrainingId)
    .filter(t => t)

  const conference = selectNodeById({
    nodes: trainings,
    id: conferenceId,
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
          { to: path, label: 'JAMstack MiniConf' },
        ]}
        type={TECH_JAMSTACK}
        breadcrumbBgColor={JAMSTACK_GREEN}
        titleLines={['JAMstack MiniConf Amsterdam April 16, 2020']}
        subtitle={
          <Ul sx={{ mt: 0 }} variants={['unstyled', 'inline']}>
            <Li>150 Attendees</Li>
            <Li>6 Speakers</Li>
            <Li>4 Hours of Fun</Li>
            <Li>1 Evening</Li>
          </Ul>
        }
        bgImageName={'jamstack-mini-conf'}
        bgColors={[JAMSTACK_GREEN, REACTSUMMIT_COLOR]}
        showInfoBox={true}
        training={conference}
        buyLink={buyExternalUrl}
        links={[
          {
            text: 'Speakers',
            to: '#speakers',
          },
          //   {
          //     text: 'Sponsors',
          //     to: '#sponsors',
          //   },
          {
            text: 'MiniConf?',
            to: '#whatisaminiconf',
          },
          {
            text: 'Agenda',
            to: '#agenda',
          },
          {
            text: 'Map',
            to:
              'https://www.google.com/maps/place/TQ/@52.3664431,4.8920517,15z/data=!4m5!3m4!1s0x0:0x45d87e43633373ea!8m2!3d52.3664431!4d4.8920517',
          },
          {
            text: 'Tickets',
            to: buyExternalUrl,
          },
        ]}
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
                          display: 'flex',
                          width: ['80px', '120px'],
                          height: ['80px', '120px'],
                          minWidth: '80px',
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
              {/* <H3>
                <a name="speakers" />
                Call For Papers
              </H3>
              <LinkButton sx={{ mb: [6, 0] }} to={callForPapersLink}>
                Submit your talk
              </LinkButton> */}
            </Col>
            <Col md={4}>
              {/* <H3>
                <a name="sponsors" />
                Sponsors
              </H3>
              {sponsorsList.map(
                ({ element, borderColor = JAMSTACK_GREEN }, index) => (
                  <Card
                    variant="primary"
                    sx={{ borderColor, mb: index > 0 ? 6 : 0 }}
                  >
                    {element}
                  </Card>
                )
              )}
              <H3 sx={{ mb: 6, pt: 5 }}>Organizers</H3>
               */}
              <H3 sx={{ mb: 6, pt: 2 }}>Organizers</H3>
              <StickyBox offsetTop={120}>
                {organizersList.map(
                  (
                    { element, borderImage, borderColor = JAMSTACK_GREEN },
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
              What is a MiniConf?
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
              about JAMstack best practices and become a part of the JAMstack
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
            </AgendaCard>

            <AgendaCard>
              <H4>
                6:20 pm - Improving web performance using machine learning by
                Charlie Gerard
              </H4>
              <P>
                When thinking about machine learning & JavaScript, performance
                is probably not the first thing that comes to mind. However,
                using machine learning with analytics data can allow us to
                understand user behaviour on a website, and let us leverage this
                information to implement what is called predictive prefetching.
                In this talk, we’ll introduce a tool called Guess.js that
                enables web applications to prefetch resources only when they’re
                likely to be needed, and see how this technique can help improve
                web performance.
              </P>
            </AgendaCard>

            <H3>Talks</H3>
            <AgendaCard>
              <H4>
                6:30 pm - Dynamic JAMstack Sites with Serverless Functions by
                Jason Lengstorf
              </H4>
              <P>
                The JAMstack is steadily rising in popularity, but did you know
                that your JAMstack sites can be completely dynamic? In this
                session, Jason will walk through several examples of using
                serverless functions to add everything from image processing to
                user authentication to databases to websites, all without
                leaving the JAMstack!
              </P>
              <H4>
                7 pm - Frontity: a new React server side and frontend framework
                for headless WordPress by Alexandra Spalato
              </H4>
              <P></P>
            </AgendaCard>

            <H3>Break</H3>
            <AgendaCard>
              <H4>7:30 pm - Food and drinks</H4>
            </AgendaCard>

            <H3>Lightning Talk</H3>
            <AgendaCard>
              <H4>
                8 pm - Innovation at speed with Gatsby and Friends by Alex
                Lobera
              </H4>
              <P>
                The JAMstack helps developers build websites and apps that are
                fast, secure, and scalable using different technologies. This
                modern web stack not only helps us build blazing fast products,
                but it can also help us build new products very fast thanks to
                the effortless integration of specific techs and third-party
                services. In this talk, I'll show some examples of how
                cross-functional teams can build products faster with Gatsby and
                Friends.
              </P>
            </AgendaCard>

            <H3>Talks</H3>
            <AgendaCard>
              <H4>
                8:10 pm - Scaling the JAMstack with Gatsby by Sid Chatterjee
              </H4>
              <P>
                We’ve been working hard on performance and scaling improvements
                in Gatsby to push the boundaries of what’s practically possible
                with the JAMstack today. Can Wikipedia be built with Gatsby with
                over a million pages? Watch this talk to find out!
              </P>
              <H4>
                8:40 pm - JAMstack and Next.js What's New and a Notion Blog by
                JJ Kasper
              </H4>
              <P>
                A talk about the latest improvements we have been working on in
                Next.js to make creating JAMstack applications a breeze and
                explaining why you should be using these new features. Will also
                be demonstrating these new features on a Notion based blog.
              </P>
            </AgendaCard>

            <H3>Networking & Party</H3>
            <AgendaCard sx={{ mb: 0 }}>
              <H4>9:10 pm - 10 pm</H4>
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
      filter: {
        tags: { elemMatch: { name: { glob: "featured-jamstack-conf-*" } } }
      }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }
    speakerImages: allFile(
      filter: {
        absolutePath: {
          regex: "/pages/jamstack-mini-conference/images/speakers.*.jpg/"
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
          regex: "/pages/jamstack-mini-conference/images/venue.*.jpg/"
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
