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
  const courseUnitTemplate = path.resolve(`src/templates/course-unit.tsx`);
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
                    slug
                    videos {
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
    const coursePath = `courses/${training.slug}`;
    createPage({
      path: coursePath,
      component: courseTemplate,
      context: {
        trainingId: training.id,
      },
    });

    training.units.forEach((unit) => {
      if (!unit.published.slug) {
        return;
      }

      const courseUnitPath = `${coursePath}/${unit.published.slug}`;
      createPage({
        path: courseUnitPath,
        component: courseUnitTemplate,
        context: {
          trainingUnitId: unit.id,
        },
      });

      if (!unit.published.videos) {
        return;
      }

      unit.published.videos.forEach((video, i) => {
        const index = i + 1;
        const lessonPath = `${courseUnitPath}/${index}`;

        createPage({
          path: lessonPath,
          component: lessonTemplate,
          context: {
            videoId: video.id,
            videoIndex: index,
          },
        });
      });
    });
  });
};
