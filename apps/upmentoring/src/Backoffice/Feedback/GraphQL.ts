// import { ConnectionData } from '../../Types/GraphQL';

// export interface FeedbackType {
//   id: string;
//   trainingId: string;
//   trainingInstanceId: string;
//   username: string;
//   createdAt: string;
//   coachesRating: {
//     knowledgeable: number;
//     explainedWell: number;
//   };
//   practiceRating: {
//     enoughAttentionFeedback: number;
//     enoughInteractionPractice: number;
//   };
//   rating: {
//     contentOrganized: number;
//     materialHelpful: number;
//     objectivesMet: number;
//     venueFacilities: number;
//   };
//   averageRating: number;
//   commentLikeMost: string;
//   commentToImprove: string;
//   othersComments: string;
//   publicComment: string;

//   training: {
//     id: string;
//     type: string;
//     title: string;
//     units: {
//       title: string;
//     };
//   };
//   trainingInstance: {
//     id: string;
//     startDate: string;
//     utcOffset: number;
//     city: string;
//     title: string;
//     units: {
//       trainingUnitId: string;
//       totalRatingSummary: {
//         totalRating: number;
//       };
//       coaches: {
//         firstName: string;
//         lastName: string;
//       };
//     };
//   };
// }

// export interface FeedbackQueryResult {
//   feedback: FeedbackType;
// }

// export interface FeedbackConnection {
//   feedbacks: ConnectionData<FeedbackType>;
// }
