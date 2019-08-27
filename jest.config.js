module.exports = {
    preset: 'ts-jest',
    setupFiles: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverage: true,
    moduleDirectories: ['node_modules', 'src/app'],
    globals: {
        'ts-jest': {
            tsConfig: 'src/app/tsconfig.json'
        }
    }
};
