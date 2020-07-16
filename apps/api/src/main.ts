import * as express from 'express';
import * as cors from 'cors';

import * as config from './config';
import router from './router';

const app = express();
app.use(cors({ credentials: true, origin: config.allowedCorsOrigins }));
app.use(express.json());
app.use(router);

const port = config.env.port;

app.listen(port, () => {
  console.log(' 🎉 listening on port', port);
});
