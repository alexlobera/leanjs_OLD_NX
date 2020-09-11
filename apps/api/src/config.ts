import { environment } from './environments/environment';

export const env = {
  port: environment.port,
};

export const allowedCorsOrigins = [
  'https://reactgraphql.academy',
  'https://online.reactgraphql.academy',
  'https://leanjs.com',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3330',
  'http://localhost:4200',
  'http://localhost:4201',
  'http://localhost:4202',
  'http://localhost:4203',
  'http://localhost:4204',
  'http://localhost:8000',
  'http://localhost:8001',
  'http://localhost:8002',
  'http://localhost:8004',
];

export const slackToken = process.env.SLACK_TOKEN;
export const autopilotApikey = process.env.AUTOPILOT_API_KEY;
