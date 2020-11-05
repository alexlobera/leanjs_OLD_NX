/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');
//
exports.onPostBuild = () => {
  const dir = path.join(__dirname, '../../dist/online.reactgraphql.academy');

  if (process.argv[2] === 'build') {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.renameSync(path.join(__dirname, 'public'), path.join(dir, 'public'));
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const courseTemplate = path.resolve(`src/templates/course.tsx`);
  const lessonTemplate = path.resolve(`src/templates/lesson.tsx`);

  const result = await graphql(
    `
      {
        upmentoring {
          trainings(filter: { onDemand: true }) {
            edges {
              node {
                id
                units {
                  id
                  published {
                    title
                    videos {
                      id
                      published {
                        slug
                        transcript
                      }
                      asset {
                        isPrivate
                        playback {
                          policy
                        }
                      }
                    }
                  }
                }
                published {
                  slug
                }
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  );

  if (result.errors) {
    throw result.errors;
  }

  result.data.upmentoring.trainings.edges.forEach(({ node: training }) => {
    const coursePath = `${training.published.slug}-course/`;

    createPage({
      path: coursePath,
      component: courseTemplate,
      context: {
        trainingId: training.id,
        coverImageRegex: `/courses/cover_${training.published.slug}/`,
      },
    });

    training.units.forEach((unit) => {
      unit.published.videos.forEach((video) => {
        const lessonPath = `${coursePath}${video.published.slug}`;
        const transcriptBlock =
          video.published &&
          video.published.transcript &&
          video.published.transcript.split('\n');
        const transcriptPreview =
          transcriptBlock && transcriptBlock.length > 0
            ? transcriptBlock.slice(0, 2).join('\n')
            : transcriptBlock.length === 1
            ? transcriptBlock[0].slice(0, 200)
            : '';
        const isPublicVideo = !video.asset.isPrivate;
        //   video.asset &&
        //   video.asset.playback &&
        //   video.asset.playback.policy === 'public';

        createPage({
          path: lessonPath,
          component: lessonTemplate,
          context: {
            videoId: video.id,
            unitId: unit.id,
            trainingId: training.id,
            // transcript: isPublicVideo ? video.transcript : null,
            // transcriptPreview: isPublicVideo ? null : transcriptPreview,
            isPublicVideo,
            transcript: isPublicVideo
              ? video.published.transcript
              : transcriptPreview,
          },
        });
      });
    });
  });
};
