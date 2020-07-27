// exports.createResolvers = ({ createResolvers }) => {
//   const resolvers = {
//     Frontmatter: {
//       author: {
//         resolve(source, args, context, info) {
//           return context.nodeModel.getNodeById({
//             id: source.author,
//             type: 'AuthorJson',
//           });
//         },
//       },
//     },
//   };
//   createResolvers(resolvers);
// };

// // import { GraphQLInt, GraphQLString } from 'gatsby/graphql';
// // import { SanityDocument } from 'gatsby-source-sanity';
// import SanityClient from '@sanity/client';

// function getClient(config) {
//   const { projectId, dataset, token } = config;
//   return new SanityClient({
//     projectId,
//     dataset,
//     token,
//     useCdn: false,
//   });
// }

// export const setFieldsOnGraphQLNodeType = ({ type }) => {
//   if (type.name === `UpMentoring_Video`) {
//     return {
//       _rawTranscript: {
//         type: `JSON`,
//       },
//     };
//   }

//   // by default return empty object
//   return {};
// };

// export const createResolvers = ({
//   actions: { createNode },
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const client = getClient(config);

//   const resolvers = {
//     UpMentoring_Video: {
//       transcript: {
//         resolve: (source) => {
//           const videoId = source.id;
//           const query =
//             '*[_type == "video" && video.umVideoId == $videoId] { id, videoTranscript }';
//           const params = { videoId };

//           return client.fetch(query, params).then((video) => {
//             console.log('Fetching video:', video);

//             const myData = video.videoTranscript;
//             const nodeContent = JSON.stringify(myData);
//             const nodeMeta = {
//               id: createNodeId(`sanity-video-${myData.id}`),
//               parent: null,
//               children: [],
//               internal: {
//                 type: `MyNodeType`,
//                 mediaType: `text/html`,
//                 content: nodeContent,
//                 contentDigest: createContentDigest(myData),
//               },
//             };
//             const node = Object.assign({}, myData, nodeMeta);
//             createNode(node);
//           });

//           //   return createRemoteFileNode({
//           //     url,
//           //     store,
//           //     cache,
//           //     createNode,
//           //     createNodeId,
//           //     reporter,
//           //   });
//         },
//       },
//     },
//   };
//   createResolvers(resolvers);
// };
