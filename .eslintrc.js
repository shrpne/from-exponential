// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // parser: 'babel-eslint',
  // parserOptions: {
  //   sourceType: 'module'
  // },
  env: {
    browser: true,
    jest: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'airbnb-base',
  // required to lint *.vue files
  // plugins: [
  //   'html'
  // ],
  // // add your custom rules here
  rules: {
    'indent': ["error", 4],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': 0,
    // disable length limit
    'max-len': 0,
    // allow `new Buffer()`
    'no-buffer-constructor': 0,
    // allow assigning to function parameter
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-else-return': 0,
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'no-use-before-define' : 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 1,
  },
  overrides: [
    {
      files: ['examples/*'],
      rules: {
        "import/no-extraneous-dependencies": 0,
        'no-console': 0,
      }
    }
  ]
};
