const { GraphQLInt } = require('gatsby/graphql')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `SanityImageAsset`) {
    return {
      localFile: {
        type: `File`,
        args: {
          width: {
            type: GraphQLInt,
            defaultValue: 600,
          },
        },
      },
    }
  }

  // by default return empty object
  return {}
}

exports.createResolvers = ({
  actions: { createNode },
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const resolvers = {
    SanityImageAsset: {
      localFile: {
        resolve: (source, args, context, info) => {
          return createRemoteFileNode({
            url: `${source.url}?w=${args.width}`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  }
  createResolvers(resolvers)
}
