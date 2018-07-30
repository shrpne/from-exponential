module.exports = {
    moduleNameMapper: {
        '~(.*)$': '<rootDir>/$1',
    },
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(minterjs-util|other-module)/)',
    ],
    /** fix jest bug @see https://github.com/facebook/jest/issues/6766 */
    testURL: 'http://localhost'
};
