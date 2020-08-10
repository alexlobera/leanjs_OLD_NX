import React from 'react';
import { Helmet } from 'react-helmet';
import StickyBox from 'react-sticky-box';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { ThemeProvider } from '@leanjs/ui-core';

import {
  FAQSection,
  getMetaData,
  defaultSerializers,
} from 'src/components/training/PageContent';
import { CheckoutProvider } from 'src/components/payment/checkout';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2, H3, P } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import { Segment } from 'src/components/elements';
import VideoPlayer from 'src/components/elements/VideoPlayer';
import LinkButton from 'src/components/buttons/LinkButton';
import Header from 'src/components/layout/Header';
import {
  UpcomingTrainingSection,
  TrainingDetails,
  selectUpcomingTrainings,
  selectNthTraining,
  AlternativeTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training';
import TrialCard from 'src/components/training/TrialCard';
import PaymentSection from 'src/components/payment/PaymentSection';
import { Link } from 'src/components/navigation';
import BlogSection from 'src/components/blog/BlogSection';
import { TECH_GRAPHQL } from '../../config/data';
import { createMetas, getRandom } from 'src/components/utils';
import { LIGHT_PINK } from 'src/config/styles';
import { selectTechColor } from '../../components/utils';

const InstancePage = ({
  path,
  trainingInstanceTypeName,
  trainingType,
  typeOfTraining = '1-day React workshop',
  curriculum: Curriculum,
  targetAudienceList: TargetAudienceList,
  crossSellTypes,
  curriculumProps = {},
  learningObjectives,
  trialOfTheTrainingId,
  trialTrainingId,
  data,
  trainings,
  feedback,
  trainingId,
  pageContext: {
    locationImage,
    posts,
    subtitle: defaultSubtitle,
    coaches,
    breadcrumbTrainingName,
    breadcrumbTrainingSlug,
    breadcrumbWorkshopName,
    breadcrumbWorkshopSlug,
    instanceTitle,
    city,
    canonical,
    nth = 1,
    videoProduct,
    videoTwoTime,
    videoTwoId,
    videoTwoQuote,
    videoTwoFullname,
    videoTwoJob,
    videoTwoCompany,
    tech,
    siteUrl,
  },
}) => {
  const subtitle = data.sanityTrainingPage?.subHeader || defaultSubtitle;
  const techLowerCase = tech.toLowerCase();
  const techColor = selectTechColor({ tech: techLowerCase });
  const pathTech = `/${techLowerCase}/`;
  const pathTraining = `${pathTech}training/`;
  const pathTrainingType = `${pathTraining}${breadcrumbTrainingSlug}/`;
  const pathWorkshopType = `${pathTrainingType}${breadcrumbWorkshopSlug}/`;
  const upcomingTrainings = trainingId
    ? selectUpcomingTrainings({
        trainings,
        trainingId,
        city,
        trainingInstanceTypeName,
      })
    : null;

  const testimonialYoutubeId =
    data.sanityTrainingPage?.testimonialYoutubeId || videoTwoId;
  const testimonialQuote =
    data.sanityTrainingPage?.testimonialQuote || videoTwoQuote;
  const testimonialJob = data.sanityTrainingPage?.testimonialJob || videoTwoJob;
  const testimonialFullname =
    data.sanityTrainingPage?.testimonialFullname || videoTwoFullname;
  const testimonialCompany =
    data.sanityTrainingPage?.testimonialCompany || videoTwoCompany;
  const rawRightForMe = data.sanityTrainingPage?._rawRightForMe ? (
    <BlockContent
      blocks={data.sanityTrainingPage?._rawRightForMe}
      serializers={defaultSerializers}
    />
  ) : (
    <Ul>
      <TargetAudienceList />
    </Ul>
  );

  const randomPosts = getRandom(posts, 3);

  const training = selectNthTraining({
    trainings: upcomingTrainings,
    nth,
  });

  const crossSellTrainings = selectUpcomingTrainings({
    trainings,
    types: crossSellTypes,
    excludeInstanceId: training && training.id,
    city,
  });

  const trialTraingInstance = getNextTrainingByTrainingId({
    trainings,
    trainingId: trialTrainingId,
  });

  const trialOfTraingInstance = getNextTrainingByTrainingId({
    trainings,
    trainingId: trialOfTheTrainingId,
  });

  const breadcrumbInstance = {
    to: path,
    label: city,
  };
  const breadcrumbLastItems = breadcrumbWorkshopName
    ? [
        {
          to: pathWorkshopType,
          label: breadcrumbWorkshopName,
        },
        breadcrumbInstance,
      ]
    : [breadcrumbInstance];

  const breadcrumb = [
    { to: '/', label: 'Home' },
    { to: pathTech, label: tech },
    { to: pathTraining, label: 'Training' },
    {
      to: pathTrainingType,
      label: breadcrumbTrainingName,
    },
    ...breadcrumbLastItems,
  ];

  const instanceImage =
    data &&
    data.instanceImage &&
    data.instanceImage.nodes &&
    data.instanceImage.nodes.length
      ? data.instanceImage.nodes[0].childImageSharp.fluid.src
      : locationImage.fluid.src;
  const instanceImageUrl = instanceImage
    ? `${siteUrl}${instanceImage}`
    : undefined;

  const furtherDetails = trialOfTheTrainingId ? (
    <>
      <Ul>
        {trialOfTraingInstance && trialOfTraingInstance.training && (
          <Li>
            This training is a trial for the{' '}
            <Link to={trialOfTraingInstance.training.toPath}>
              {trialOfTraingInstance.training.description.title}
            </Link>
          </Li>
        )}
      </Ul>

      {trialOfTraingInstance && (
        <LinkButton to={trialOfTraingInstance.training.toPath}>
          Buy full training
        </LinkButton>
      )}
    </>
  ) : undefined;

  const defaultMetas = {
    title: instanceTitle,
    imageFullPublicUrl: instanceImageUrl,
    subtitle,
    ogType: 'website',
    twitterSite: '@reactgqlacademy',
  };

  const metas = getMetaData({
    defaultMetas,
    metaData: data.sanityTrainingPage,
  });

  return (
    <ThemeProvider
      theme={{
        colors: {
          tech: techColor,
        },
      }}
    >
      <CheckoutProvider>
        <Helmet
          title={instanceTitle}
          link={[
            {
              rel: 'canonical',
              href: canonical,
            },
          ]}
        >
          {createMetas(metas)}
        </Helmet>
        <Header
          breadcrumbPath={breadcrumb}
          tech={techLowerCase}
          breadcrumbBgColor={
            techLowerCase === TECH_GRAPHQL.toLowerCase()
              ? LIGHT_PINK
              : undefined
          }
          city={city}
          titleLines={instanceTitle}
          subtitle={subtitle}
          links={[
            {
              text: 'Training details',
              to: '#curriculum',
            },
            {
              text: 'Is it right for me?',
              to: '#target-audience',
            },
            {
              text: 'Pricing',
              to: '#pricing',
            },
            {
              text: 'FAQs',
              to: '#faqs',
            },
          ]}
          trainingType={trainingType}
          training={training}
          showInfoBox={true}
          infoBoxFluidImage={locationImage}
          bgColor="transparent"
          removeBgImage
        />
        <TopSection>
          <Segment>
            <Curriculum
              {...curriculumProps}
              training={training}
              learningObjectives={learningObjectives}
              trainingType={trainingType}
              pageData={data && data.sanityTrainingPage}
              content={
                <React.Fragment>
                  {videoProduct && (
                    <>
                      {videoProduct && videoProduct.title && (
                        <H3>{videoProduct.title}</H3>
                      )}
                      <VideoPlayer
                        playbackId={videoProduct.video.asset.playbackId}
                        thumbnailSecond={videoProduct.defaultThumbnailSecond}
                      />
                    </>
                  )}
                  <TrainingDetails
                    coaches={coaches}
                    training={training}
                    furtherDetails={furtherDetails}
                  />
                </React.Fragment>
              }
            />
          </Segment>
        </TopSection>
        <Section>
          <Row>
            <Col md={5} mdOffset={1}>
              <AttendeeQuote
                tech={techLowerCase}
                quote={testimonialQuote}
                fullname={testimonialFullname}
                job={testimonialJob}
                company={testimonialCompany}
                youtubeId={testimonialYoutubeId}
                youtubeTime={videoTwoTime}
              />
            </Col>
            <Col md={4} lgOffset={1}>
              <H2>
                <a to="#target-audience" name="target-audience" />
                Is this {typeOfTraining} right for me?{' '}
              </H2>

              {rawRightForMe}

              <P sx={{ mt: 4 }}>
                Do you have any questions?{' '}
                <Link to="#contact-us">Contact us :)</Link>
              </P>
              {/* TODO REIMPLEMENT THIS */}
              {/* {learnToCodePartners.length > 0 &&
              (type === REACT_BOOTCAMP ||
                type === REACT_FUNDAMENTALS ||
                type === REACT_PART_TIME) && (
                <React.Fragment>
                  <P>
                    If you are not a professional developer yet, we recommend
                    you to consider our {city} learn-to-code partner before
                    attending our {typeOfTraining}:
                  </P>
                  <Row>
                    {learnToCodePartners.slice(0, 2).map(partner => (
                      <Col xs={6}>
                        <Link to={partner.website}>
                          <Image
                            fluid={
                              partner.logo.asset.localFile.childImageSharp.fluid
                            }
                          />
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </React.Fragment>
              )} */}
            </Col>
          </Row>
        </Section>

        <Section variant="dark">
          <Row>
            <Col md={5} mdOffset={1}>
              <PaymentSection
                trialTraingInstance={trialTraingInstance}
                isOnline={city && city.toLowerCase() === 'remote'}
                item={training}
              />
            </Col>
            {trialTraingInstance && (
              <Col md={4} mdOffset={1} sx={{ pt: 3 }}>
                <StickyBox offsetBottom={15} offsetTop={120}>
                  <TrialCard trainingInstance={trialTraingInstance} />
                </StickyBox>
              </Col>
            )}
          </Row>
        </Section>
        <FAQSection pageData={data && data.sanityTrainingPage} />
        {!training || (!trialTraingInstance && !trialOfTheTrainingId) ? (
          <AlternativeTrainingSection trainings={crossSellTrainings} />
        ) : null}
        <BlogSection posts={randomPosts} />
        <UpcomingTrainingSection trainings={trainings} />
      </CheckoutProvider>
    </ThemeProvider>
  );
};

export const query = graphql`
  fragment CoachInstance on SanityPerson {
    fullname
    image {
      asset {
        localFile(width: 200) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

InstancePage.defaultProps = {
  pageContext: {},
};

export default InstancePage;
