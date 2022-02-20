module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testTimeout: 20000,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: './tsconfig.jest.json',
    },
  },
};
