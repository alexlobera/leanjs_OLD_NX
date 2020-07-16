import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import StickyBox from 'react-sticky-box';

import LinkButton from 'src/components/buttons/LinkButton';
import { Link } from 'src/components/navigation';
import Section, { TopSection, ColSection } from 'src/components/layout/Section';
import Gallery, { massageGalleryImages } from 'src/components/elements/Gallery';
import { Col, Row } from 'src/components/layout/Grid';
import Box from 'src/components/layout/Box';
import Flex from 'src/components/layout/Flex';
import { H2, H3, H4, P } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import ApolloLogo from 'src/components/logos/Apollo';
import RGAWhiteLogo from 'src/components/logos/RGAWhiteLogo';
import ReactSummitLogo from 'src/components/logos/ReactSummit';
import Guild from 'src/components/logos/Guild';
import Header from 'src/components/layout/Header';
import TwitterIcon from 'src/components/icons/TwitterIcon';
import GitHubIcon from 'src/components/icons/GitHubIcon';
import WebsiteIcon from 'src/components/icons/WebsiteIcon';
import {
  getPostsFromNodes,
  sortingPostsByTag,
} from 'src/components/blog/utils';
import BlogSection from 'src/components/blog/BlogSection';

import {
  AlternativeTrainingSection,
  getNextTrainingByTrainingId,
  selectUpcomingTrainings,
  selectNodeById,
} from 'src/components/training';
import { Segment, Image } from 'src/components/elements';
import { GRAPHQL_BOOTCAMP, TECH_GRAPHQL } from 'src/config/data';
import { GRAPHQL_PINK, LIGHT_PINK, BLUE, GREY } from 'src/config/styles';
import { createMetas } from 'src/components/utils';
import Card from 'src/components/elements/Card';

const REACTSUMMIT_COLOR = '#0f0';

const sponsorsList = [
  {
    element: <ApolloLogo width="100%" height={null} />,
    borderColor: GRAPHQL_PINK,
  },
];

const RGABorderImage = `linear-gradient(to top, ${GRAPHQL_PINK}, ${BLUE}) 1 100%`;

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
];

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
  {
    fullname: 'Roy Derks',
    job: 'Senior Frontend Developer at City of Amsterdam',
    imageName: 'roy',
    description: `Roy Derks is a serial startup CTO, developer, author and conference speaker from Amsterdam. He also teaches React and GraphQL, and works on open-source JavaScript projects for the City of Amsterdam.`,
    links: [
      { url: 'https://twitter.com/gethackteam', icon: TwitterIcon },
      { url: 'https://github.com/royderks', icon: GitHubIcon },
      { url: 'https://dev.to/gethackteam', icon: WebsiteIcon },
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
    fullname: 'Uri Goldshtein',
    job: 'Founder at The Guild',
    imageName: 'uri',
    description: `Uri is the founder of The Guild, a group of open source developers in charge of the largest open source libraries in the GraphQL Javascript ecosystem. They hands-on support large companies, to help them manage successful technological transformations using open source tools and educational workshops. Uri is a former Apollo developer and a contributor to the GraphQL Subscriptions spec.`,
    links: [
      { url: 'https://twitter.com/UriGoldshtein', icon: TwitterIcon },
      { url: 'https://github.com/urigo', icon: GitHubIcon },
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
      { url: 'https://sidhartha.dev/', icon: WebsiteIcon },
    ],
  },
];

const metas = {
  title: 'GraphQL MiniConf Amsterdam | React GraphQL Academy',
  description:
    'Interested in learning more about GraphQL and connecting to its community? Join us at the GraphQL MiniConf!',
  imageFullPublicUrl:
    'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Fmini-confs%2Fpic-graphql-mini-conf-min.png?alt=media',
  type: 'website',
};

const AgendaCard = ({ sx, ...rest }) => (
  <Card
    variant="primary"
    sx={{ mb: 5, borderColor: GRAPHQL_PINK, ...sx }}
    {...rest}
  />
);

const buyExternalUrl =
  'https://ti.to/gitnation/graphql-mini-conference-2020-react-summit';

const GraphQLPage = ({ data, path, trainings }) => {
  // TODO MEMOIZE getPostsFromNodes
  const posts = getPostsFromNodes({
    sanityNodes: ((data.sanityNodes && data.sanityNodes.nodes) || []).sort(
      sortingPostsByTag('featured-mini-conf-')
    ),
  });

  const relatedTrainingInstance = [
    { trainingId: '5e349275778e880002113474', trainings },
    { trainingId: '5dc6f35fce62530002bd3e92', trainings },
    {
      trainingId: '5aa2ab2a7dcc782348ea2011',
      trainings: (
        selectUpcomingTrainings({ trainings, city: 'amsterdam' }) || []
      ).slice(0, 3),
    },
  ];
  const crossSellTrainings = relatedTrainingInstance
    .map(getNextTrainingByTrainingId)
    .filter((t) => t);

  const conference = selectNodeById({
    nodes: trainings,
    id: '5e3e990ae1ac3f000218d377',
  });

  const smallGalleryImages = massageGalleryImages(data.venueImages, 'sm');
  const largeGalleryImages = massageGalleryImages(data.venueImages, 'lg');

  const speakerImages = data.speakerImages.nodes.reduce(
    (acc, { name, childImageSharp }) => {
      acc[name] = childImageSharp.fluid;

      return acc;
    },
    {}
  );

  const galleryImages = smallGalleryImages.map(
    ({ src, height, width, originalName }, index) => {
      return {
        srcSmall: src,
        srcLarge: largeGalleryImages[index].src,
        height,
        width,
        originalName,
      };
    }
  );
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
          { to: path, label: 'MiniConf' },
        ]}
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        titleLines={['GraphQL MiniConf Amsterdam April 15, 2020']}
        subtitle={
          <Ul sx={{ mt: 0 }} variants={['unstyled', 'inline']}>
            <Li>150 Attendees</Li>
            <Li>6 Speakers</Li>
            <Li>4 Hours of Fun</Li>
            <Li>1 Evening</Li>
          </Ul>
        }
        bgImageName={'graphql-mini-conf'}
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
                        fluid={speakerImages[imageName]}
                        sx={{
                          borderRadius: '50%',
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
              <H3>
                <a name="speakers" />
                Call For Papers
              </H3>
              <LinkButton
                sx={{ mb: [6, 0] }}
                to="https://docs.google.com/forms/d/e/1FAIpQLScIvHytKvbO0VjtHeP8ljLg0c9J9IpfDBn8CEllgIgdxhh-cA/viewform"
              >
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
              <H4>
                6:20 pm - Why GraphQL between micro-services is the worst and
                the best idea at the same time by Uri Goldshtein
              </H4>
              <P>
                GraphQL is great! So let’s just “GraphQL all the things!!” But
                does GraphQL really fits everywhere? What might be some of the
                issues of using GraphQL between services? In this talk I will
                demo the current ways of using GraphQL between services and
                reveal a new radical approach that might shine a new light on
                the subject.
              </P>
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
              <H4>7 pm - GraphQL Without a Database by Roy Derks</H4>
              <P>
                Your frontend developers are pushing to get started with
                GraphQL, but you don’t have the backend capacity to migrate your
                existing REST APIs to GraphQL? In this talk, I’ll show how to
                wrap existing REST APIs into one single GraphQL endpoint on both
                the client and server side.
              </P>
            </AgendaCard>

            <H3>Break</H3>
            <AgendaCard>
              <H4>7:30 pm - Food and drinks</H4>
            </AgendaCard>

            <H3>Talks</H3>
            <AgendaCard>
              <H4>
                8:00 pm - GraphQL Transformation, are we ready to change? by
                Alex Lobera
              </H4>
              <P>
                GraphQL is transforming the way we build apps. Front-end devs
                love it because they get more control. Back-end devs or
                infrastructure engineers might feel pushed out of their comfort
                zone and refuse to change. Understanding how GraphQL can improve
                the way we build products is key for successful GraphQL
                adoption.
              </P>
              <H4>8:30 pm - How Gatsby uses GraphQL by Sid Chatterjee</H4>
              <P>
                GraphQL is one of the best things to have happened to modern web
                development. You might've heard that Gatsby uses GraphQL but
                Gatsby compiles away your GraphQL queries at build time. It's
                also what makes fetching data from 100s of different data
                sources possible and intuitive in Gatsby. In this talk, we'll
                dive deep into Gatsby's GraphQL layer and talk about automatic
                schema inference, schema customisation, build time query
                extraction and more.{' '}
              </P>
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
  );
};

export const query = graphql`
  query {
    sanityNodes: allSanityPost(
      filter: {
        tags: { elemMatch: { name: { glob: "featured-mini-conf-*" } } }
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
`;
export default GraphQLPage;
