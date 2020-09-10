// exports.createResolvers = ({ createResolvers }) => {
//   const resolvers = {
//     UpMentoring_Video: {
//       sanityVideo: {
//         resolve(source, args, context, info) {
//           return context.nodeModel
//             .getAllNodes({ type: 'SanityVideo' })
//             .find((video) => video.umVideoId === source.id);
//         },
//         type: 'SanityVideo',
//       },
//     },
//   };
//   createResolvers(resolvers);
// };
