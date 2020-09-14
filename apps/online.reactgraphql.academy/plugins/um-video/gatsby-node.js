const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createResolvers = ({
  actions: { createNode },
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const resolvers = {
    UpMentoring_VideoAsset: {
      posterImageFile: {
        type: `File`,
        resolve: ({ posterImageUrl }, { width, height }) => {
          const url = new URL(posterImageUrl);
          const { searchParams } = url;
          if (width) searchParams.set('width', width);
          if (height) searchParams.set('height', height);
          url.search = searchParams.toString();

          return createRemoteFileNode({
            url: url.toString(),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  };
  createResolvers(resolvers);
};

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `UpMentoring_VideoAsset`) {
    return {
      posterImageFile: {
        type: `File`,
        args: {
          width: {
            type: GraphQLInt,
          },
          height: {
            type: GraphQLInt,
          },
        },
      },
    };
  }

  // by default return empty object
  return {};
};
