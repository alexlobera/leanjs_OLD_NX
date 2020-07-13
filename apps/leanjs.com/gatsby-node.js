/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');
//
exports.onPostBuild = () => {
  const dir = path.join(__dirname, '../../dist/leanjs.com');

  if (process.argv[2] === 'build') {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.renameSync(path.join(__dirname, 'public'), path.join(dir, 'public'));
  }
};
