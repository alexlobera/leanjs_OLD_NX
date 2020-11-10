async function createLandingPages(
  pathPrefix = '/',
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityPage {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).nodes || [];
  pageEdges.forEach(({ id, slug = {} }) => {
    const path = [pathPrefix, slug.current, '/'].join('');
    reporter.info(`Creating landing page: ${path}`);
    createPage({
      path,
      component: require.resolve('./src/templates/page.tsx'),
      context: { id },
    });
  });
}

async function createCoursePages(pathPrefix = '/', graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityCourse {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityCourse || {}).nodes || [];
  pageEdges.forEach(({ id, slug = {} }) => {
    const path = [pathPrefix, slug.current, '/'].join('');
    reporter.info(`Creating course page: ${path}`);
    createPage({
      path,
      component: require.resolve('./src/templates/course.tsx'),
      context: { id },
    });
  });
}

async function createBlogPostPages(
  pathPrefix = '/',
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityPost {
        nodes {
          _rawBody(resolveReferences: { maxDepth: 5 })
          slug {
            current
          }
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPost || {}).nodes || [];
  pageEdges.forEach(({ id, slug = {}, _rawBody }) => {
    const path = [pathPrefix, slug.current, '/'].join('');
    reporter.info(`Creating post page: ${path}`);
    const sanityImageAssetIds = _rawBody.reduce(
      (images, { _type, asset = {} }) => {
        if (_type === 'image' && asset._id) {
          return [...images, asset._id];
        }
        return images;
      },
      []
    );

    createPage({
      path,
      component: require.resolve('./src/templates/post.tsx'),
      context: { id, sanityImageAssetIds },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages('/', graphql, actions, reporter);
  await createCoursePages('/cursos/', graphql, actions, reporter);
  await createBlogPostPages('/blog/', graphql, actions, reporter);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityTestimonialSection: {
      testimonials: {
        type: ['SanityTestimonial'],
        resolve(source, args, context) {
          return context.nodeModel.getAllNodes({ type: `SanityTestimonial` });
        },
      },
    },
    SanityPartnerSection: {
      partners: {
        type: ['SanityPartner'],
        resolve(source, _, context) {
          const nodes = context.nodeModel.getAllNodes({
            type: `SanityPartner`,
          });

          return source.limit > 0 ? nodes.slice(0, source.limit) : nodes;
        },
      },
    },
    SanityCourseSection: {
      courses: {
        type: ['SanityCourse'],
        resolve(source, _, context) {
          const nodes = context.nodeModel.getAllNodes({
            type: `SanityCourse`,
          });

          return source.limit > 0 ? nodes.slice(0, source.limit) : nodes;
        },
      },
    },
    SanityCourse: {
      relatedCourses: {
        type: ['SanityCourse'],
        resolve(source, _, context) {
          const nodes = context.nodeModel.getAllNodes({
            type: `SanityCourse`,
          });

          // TODO RANDOMIZE THIS AND THEN GET 3
          return nodes.slice(0, 3);
        },
      },
    },
    SanityPostSection: {
      posts: {
        type: ['SanityPost'],
        resolve(source, _, context) {
          const nodes = context.nodeModel.getAllNodes({
            type: `SanityPost`,
          });

          return source.limit > 0 ? nodes.slice(0, source.limit) : nodes;
        },
      },
    },
  };

  createResolvers(resolvers);
};
