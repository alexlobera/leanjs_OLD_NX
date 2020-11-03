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

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages('/', graphql, actions, reporter);
  // await createBlogPostPages("/blog", graphql, actions, reporter);
};
