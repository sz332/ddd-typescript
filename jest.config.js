module.exports = {
    rootDir: process.cwd(),
    transform: { '^.+\\.ts?$': 'ts-jest' },
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true
};