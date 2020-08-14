import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import StickyBox from 'react-sticky-box';
import { GitHubIcon, PlayMedia } from '@leanjs/ui-icons';
import BlockContent from '@sanity/block-content-to-react';
import { OkaidiaRGA } from '@leanjs/ui-academy';
import {
  removeCarriageReturn,
  getImagePublicURLs,
  getVideoInfo,
} from '@leanjs/ui-academy';

import Layout from '../components/layout/Layout';
import { VideoPlayer } from '../components/display/VideoPlayer';
import { Box, Grid, Container, Ul, Li } from '../components/layout';
import Link from '../components/navigation/Link';
import { H1, H2, H3, H4, H5, H6, P, Span, Image } from '../components/display';
import Code from '../components/display/Code';

interface LessonPageProps {
  data: any;
  pageContext: any;
}

const SOLUTION_FIELD_ID = '@RklFOjVmMTgzYzVmNThlZjE1MGVhOGQ4OGUwZQ==';
const EXERCISE_FIELD_ID = '@RklFOjVmMTgzY2ViNThlZjE1MGVhOGQ4OGUwZg==';
const GITHUB_COLOR = '#1B1F23';

const Icon = ({ comp: Comp }) => (
  <Comp sx={{ mb: '-7px', mr: 2 }} fill={GITHUB_COLOR} />
);

const LessonPage: FunctionComponent<LessonPageProps> = ({ data }) => {
  const { trainingById: training, video, trainingUnit } = data.upmentoring;
  const linkToSolution = trainingUnit.published.customFieldsValues.find(
    ({ fieldId }) => fieldId === SOLUTION_FIELD_ID
  ).values[0];
  const linkToExercise = trainingUnit.published.customFieldsValues.find(
    ({ fieldId }) => fieldId === EXERCISE_FIELD_ID
  ).values[0];
  const trainingPath = `/${training.slug}-course/`;
  const { _rawTranscript } = video.sanityVideo;
  const transcriptImagePublicURLs = getImagePublicURLs(data.transcriptImages);
  const serializers = {
    marks: {
      link: ({ mark: { href }, children }) => (
        <Link to={href} children={children} />
      ),
    },
    list: ({ children }) => <Ul children={children} />,
    listItem: ({ children = {} }) => <Li children={children} />,
    hardBreak: null,
    types: {
      block: ({ children, node }) => {
        const style = node.style || 'normal';
        let formatedChildren;
        switch (style) {
          case 'h4':
            return <H4 children={children} />;
          case 'h5':
            return <H5 children={children} />;
          case 'h6':
            return <H6 children={children} />;
          default:
            formatedChildren =
              children &&
              children.reduce &&
              children.reduce((acc, curr) => {
                const element = removeCarriageReturn(curr);
                if (element) {
                  acc.push(element);
                }

                return acc;
              }, []);

            return formatedChildren && formatedChildren.length ? (
              <P children={formatedChildren} />
            ) : null;
        }
      },
      code: ({ node }) => (
        <Code language={node.language} className={node.language}>
          {node.code}
        </Code>
      ),
      span: Span,
      image: (props) => (
        <Image src={transcriptImagePublicURLs[props.node.asset.id]} />
      ),
    },
  };

  const transcript = (
    <BlockContent blocks={_rawTranscript} serializers={serializers} />
  );

  const { url: videoUrl, posterUrl: videoPoserUrl } = getVideoInfo(video);

  return (
    <Layout
      variant="stack"
      breadcrumbPaths={[
        {
          path: '/',
          text: 'Home',
        },
        {
          path: trainingPath,
          text: training.title,
        },
        { text: video.title },
      ]}
    >
      <OkaidiaRGA />
      <Container>
        <VideoPlayer posterUrl={videoPoserUrl} url={videoUrl} />
        <Grid columns={12} sx={{ mt: 7 }}>
          <Box sx={{ gridColumn: '1/ 8' }}>
            <H1 as="h1" variant="h2">
              {video.title}
            </H1>
            <H3>Code</H3>
            <Ul variant="unstyled" sx={{ mb: 7 }}>
              <Li>
                <Icon comp={GitHubIcon} />
                <Link to={linkToExercise}>Link to EXERCISE</Link>
              </Li>
              <Li>
                <Icon comp={GitHubIcon} />
                <Link to={linkToSolution}>Link to SOLUTION</Link>
              </Li>
            </Ul>
            <H3>Transcript</H3>
            {transcript}
          </Box>
          <Box sx={{ gridColumn: ' 9/ -1' }}>
            <StickyBox offsetTop={0}>
              <H2 as="h1" variant="h3" sx={{ pt: 2 }}>
                {trainingUnit.published.title} lessons
              </H2>
              <P>
                Completed 0 out of {trainingUnit.published.videos.length}{' '}
                lessons
              </P>
              <P>
                Where is the video <Link>autoplay?</Link>
              </P>
              <Ul variant="unstyled" sx={{ pl: 0 }}>
                {trainingUnit.published.videos.map(({ title, slug }) => (
                  <Li key={slug}>
                    <Link to={`${trainingPath}${slug}/`}>
                      <Icon comp={PlayMedia} />
                      {title}
                    </Link>
                  </Li>
                ))}
              </Ul>
            </StickyBox>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query getVideo(
    $videoId: ID!
    $unitId: ID!
    $trainingId: ID!
    $sanityTranscriptImageAssetIds: [String] = []
  ) {
    transcriptImages: allSanityImageAsset(
      filter: { id: { in: $sanityTranscriptImageAssetIds } }
    ) {
      nodes {
        id
        localFile(width: 650) {
          publicURL
        }
      }
    }
    upmentoring {
      video(id: $videoId) {
        id
        title
        asset {
          url
        }
        sanityVideo {
          thumbnailImage {
            asset {
              localFile(width: 1150) {
                publicURL
              }
            }
          }
          _rawTranscript(resolveReferences: { maxDepth: 10 })
        }
      }
      trainingUnit(id: $unitId) {
        published {
          title
          slug
          customFieldsValues {
            values
            fieldId
          }
          videos {
            title
            slug
          }
        }
      }
      trainingById(id: $trainingId) {
        title
        slug
      }
    }
  }
`;

export default LessonPage;
