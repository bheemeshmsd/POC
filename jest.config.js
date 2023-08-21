module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        "^.+\\.(j|t)sx?$": "babel-jest", // You might have other transform rules here
        "\\.(png|jpg|gif)$": "jest-transform-stub",
      }
}