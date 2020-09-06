/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');

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
                slug
                id
                units {
                  id
                  published {
                    title
                    videos {
                      slug
                      id
                    }
                  }
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
    const coursePath = `${training.slug}-course/`;

    createPage({
      path: coursePath,
      component: courseTemplate,
      context: {
        trainingId: training.id,
      },
    });

    training.units.forEach((unit) => {
      unit.published.videos.forEach((video) => {
        const lessonPath = `${coursePath}${video.slug}`;
        const _rawTranscript = video.sanityVideo
          ? video.sanityVideo._rawTranscript || []
          : [];
        const sanityTranscriptImageAssetIds = _rawTranscript.reduce(
          (images, { _type, asset = {} }) => {
            if (_type === 'image' && asset._id) {
              return [...images, asset._id];
            }
            return images;
          },
          []
        );

        createPage({
          path: lessonPath,
          component: lessonTemplate,
          context: {
            videoId: video.id,
            unitId: unit.id,
            trainingId: training.id,
            sanityTranscriptImageAssetIds,
          },
        });
      });
    });
  });
};
