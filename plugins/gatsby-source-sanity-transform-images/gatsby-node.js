const { GraphQLInt, GraphQLString } = require('gatsby/graphql')
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
          format: {
            type: GraphQLString,
            defaultValue: 'jpg',
          },
          height: {
            type: GraphQLInt,
          },
          fit: {
            type: GraphQLString,
            defaultValue: 'crop',
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
        resolve: (source, { width, height, fit, format }) => {
          return createRemoteFileNode({
            url: `${source.url}?w=${width}&fm=${format}${
              height ? `&h=${height}` : ''
            }&fit=${fit}`,
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
