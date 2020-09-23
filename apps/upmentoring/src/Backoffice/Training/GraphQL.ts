// import { Deleted } from 'src/App/Types/GraphQL';
// import { ConnectionData } from 'src/App/Types/GraphQL';

// export interface TrainingInstanceType {
//   id: string;
//   trainingId: string;
//   startDate: string;
//   utcOffset: number;
//   endDate: string;
//   city: string;
//   title: string;
//   training: {
//     id: string;
//     title: string;
//     startDate: string;
//     upcomingInstancesConnection: ConnectionData<TrainingInstanceType>;
//   };
//   coaches: {
//     firstName: string;
//     lastName: string;
//     userId: string;
//   };
// }

// export interface TrainingInstanceQueryResult {
//   trainingInstance: TrainingInstanceType;
// }

// export interface TrainingInstancesConnection {
//   trainingInstances: ConnectionData<TrainingInstanceType>;
// }

// export interface DeleteTrainingInstanceMutation {
//   deleteTrainingInstance: { trainingInstance: Deleted };
// }
// export interface TrainingType {
//   id: string;
//   type: string;
//   createdAt: string;
//   units: [TrainingUnitType];
//   title: string;
//   description: {
//     syllabus: string;
//     objectives: string;
//   };
// }

// export interface TrainingQueryResult {
//   trainingById: TrainingType;
// }

// export interface TrainingsConnection {
//   trainings: ConnectionData<TrainingType>;
// }

// export interface DeleteTrainingMutation {
//   deleteTraining: { training: Deleted };
// }

// export interface TrainingUnitType {
//   id: string;
//   published: {
//     title: string;
//     objectives: string;
//     syllabus: string;
//   };
//   draft: {
//     title: string;
//     objectives: string;
//     syllabus: string;
//   };
// }
