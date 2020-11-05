import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import raven from 'raven-js';
import { useStaticQuery, graphql } from 'gatsby';
import { AcceptCookiesBanner } from '@leanjs/ui-academy';

import { createTrainingPath, formatMeetup } from './training/dataUtils';

import { setCookie, getCookie } from './utils/store';
import { getURLParameter } from './utils/url';
import 'normalize.css';
import './layout.css';
import { SENTRY_DSN } from '../config/apps';
import { TRAINING_TYPE_FIELD_ID, TRAINING_TECH_FIELD_ID } from '../config/data';
import Menu from '../components/navigation/menu';
import Footer from '../components/layout/Footer';
// import AcceptCookies from '../components/layout/AcceptCookies';
import favicon from './favicon.ico';
import FONT_BARLOW_400_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-400.woff2';
import FONT_BARLOW_800_LATIN_EXT_WOFF2 from '../fonts/barlow-v3-latin_latin-ext-800.woff2';

raven.config(SENTRY_DSN).install();

const makeSureTheseFontsAreUsedOnTheWebsiteIfYouArePreloadingThem = [
  FONT_BARLOW_400_LATIN_EXT_WOFF2,
  FONT_BARLOW_800_LATIN_EXT_WOFF2,
];
const preloadUrls = makeSureTheseFontsAreUsedOnTheWebsiteIfYouArePreloadingThem.map(
  (url) => ({
    rel: 'preload',
    href: url,
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'crossorigin',
  })
);
let prefetchDnsUrls = [
  'https://connect.facebook.net',
  'https://www.google-analytics.com',
];
const prefetchDnsLinks = prefetchDnsUrls.map((href) => ({
  rel: 'dns-prefetch',
  href,
}));

const layoutQuery = graphql`
  query layoutTraining {
    site {
      siteMetadata {
        title
        description
      }
    }
    upmentoring {
      events(
        filter: { ownerId: "5aaa9b07f146e5cfafad189e", startDate: future }
        orderBy: { sort: startDate, direction: ASC }
      ) {
        edges {
          node {
            __typename
            id
            published {
              meetup {
                id
              }
              title
              standardPrice
              currency
              startDate
              utcOffset
              endDate
              city
              cityCountry
              mapUrl
              address
              venueName
            }
          }
        }
      }
      trainingInstances(
        filter: { ownerId: "5aaa9b07f146e5cfafad189e", startDate: future }
        orderBy: { sort: startDate, direction: ASC }
      ) {
        edges {
          node {
            __typename
            id
            published {
              startDate
              utcOffset
              endDate
              isOnline
              city
              cityCountry
              daysOfTheWeek
              address
              venueName
              mapUrl
              standardPrice
              currency
              trainingInstanceType {
                name
                title
                id
              }
            }
            title
            trainingId
            training {
              id
              published {
                slug
                customFieldsValues {
                  values
                  fieldId
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Layout = ({ children }) => {
  // TODO only add preconnect to 'https://api.upmentoring.com' in training instance page
  // let preconnectUrls = ['https://api.upmentoring.com']
  let preconnectUrls = [];
  // let scriptUrls = []
  preconnectUrls = [...preconnectUrls, 'https://api.autopilothq.com'];

  const preconnectLinks = preconnectUrls.map((href) => ({
    crossorigin: 'crossorigin',
    rel: 'preconnect',
    href,
  }));

  React.useEffect(() => {
    const utm_source_cookie = getCookie('utm_source');
    const utm_source_url = getURLParameter('utm_source');
    if (!utm_source_cookie && utm_source_url) {
      setCookie('utm_source', utm_source_url);
    }
  }, []);

  const cityIndex = {};
  const formatTraining = ({ node }) => {
    const {
      training,
      title,
      published: publishedInstance,
      ...restInstance
    } = node;
    const { trainingInstanceType, city = '', isOnline } = publishedInstance;

    const { published: publishedTraining, ...restTraining } = training || {};
    const trainingId = restTraining.id;

    if (!publishedTraining) {
      return;
    }

    const { slug } = publishedTraining;
    const remoteOrCity = isOnline ? 'remote' : city;

    const trainingType = training.published.customFieldsValues.find(
      ({ fieldId }) => fieldId === TRAINING_TYPE_FIELD_ID
    ).values[0];

    const tech = training.published.customFieldsValues.find(
      ({ fieldId }) => fieldId === TRAINING_TECH_FIELD_ID
    ).values[0];

    const trainingInstanceTypeName =
      trainingInstanceType && trainingInstanceType.name;

    const key = `${remoteOrCity}${slug}${trainingInstanceTypeName}`;
    cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1;

    return {
      ...restInstance,
      ...publishedInstance,
      trainingInstanceTypeName,
      title,
      trainingType,
      tech,
      training: {
        ...restTraining,
        ...publishedTraining,
        toPath: createTrainingPath({
          trainingId,
          slug,
          trainingType,
          tech,
          trainingInstanceTypeName,
        }),
      },
      toPath: createTrainingPath({
        city: remoteOrCity,
        index: cityIndex[key],
        trainingId,
        slug,
        trainingInstanceTypeName,
        trainingType,
        tech,
      }),
    };
  };

  const data = useStaticQuery(layoutQuery);

  const trainings = useMemo(
    () =>
      data.upmentoring.trainingInstances.edges
        .map(formatTraining)
        .filter((f) => f),
    [data]
  );
  const meetups = data.upmentoring.events.edges.map(formatMeetup);
  const trainingAndEvents = [...trainings, ...meetups];

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title={data && data.site && data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data && data.site && data.site.siteMetadata.description,
          },
        ]}
        link={[
          ...preloadUrls,
          ...prefetchDnsLinks,
          ...preconnectLinks,
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: `${favicon}`,
          },
        ]}
      >
        {/* {scriptTags} */}
      </Helmet>
      <Menu />
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          trainings: trainingAndEvents,
        })
      )}
      <Footer />
      <AcceptCookiesBanner />
    </React.Fragment>
  );
};

export default Layout;
