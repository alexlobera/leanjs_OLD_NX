module.exports = {
  name: 'reactgraphql.academy',
  preset: '../../jest.config.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/apps/reactgraphql.academy',
  testEnvironment: 'jest-environment-jsdom-global',
  globals: {
    __PATH_PREFIX__: '',
    __BASE_PATH__: '',
  },
  setupFiles: [
    '<rootDir>/test/jest-config/loadershim.js',
    '<rootDir>/test/jest-config/setup.js',
  ],
};
