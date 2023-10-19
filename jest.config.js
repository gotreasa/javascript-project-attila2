export default {
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0,
    },
  },
  moduleNameMapper: { '^uuid$': 'uuid' },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
        outputName: 'jest-junit.xml',
        uniqueOutputName: 'true',
      },
    ],
  ],
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  transform: {},
  watchPathIgnorePatterns: ['pact/logs/*', 'pact/pacts/*'],
};
