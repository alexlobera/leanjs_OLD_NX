// import UpMentoringTrainingInput from '../../components/UpMentoringTrainingInput';
// import { VIDEO_TYPE_TRAINING } from './video';

// export default {
//   name: 'training',
//   title: 'Training',
//   type: 'document',
//   preview: {
//     select: {
//       trainingId: 'trainingId',
//     },
//     prepare({ trainingId }) {
//       return {
//         title: `queryNodeId=${trainingId}`,
//       };
//     },
//   },
//   fields: [
//     {
//       name: 'trainingId',
//       title: 'Training',
//       type: 'string',
//       inputComponent: UpMentoringTrainingInput,
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'videos',
//       title: 'Videos',
//       type: 'array',
//       of: [
//         {
//           type: 'reference',
//           to: { type: 'video' },
//           options: {
//             filter: `type == $type`,
//             filterParams: { type: VIDEO_TYPE_TRAINING },
//           },
//         },
//       ],
//     },
//   ],
// };
