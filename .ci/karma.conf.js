module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'lib/chai/chai.js',
      'lib/jquery/jquery.js',
      'lib/underscore/underscore.js',
      'lib/require/require.js',

      'sprint-one/test/verifyClass.js',
      'sprint-one/test/tests.js',
    ],
    frameworks: ['environments'],
    environments: {
      definitions: [
        '.ci/sprint-one/karma-env-functional-shared.js',
        '.ci/sprint-one/karma-env-functional.js',
        '.ci/sprint-one/karma-env-pseudoclassical.js',
        '.ci/sprint-one/karma-env-prototypal.js',
        '.ci/sprint-one/karma-env-es6.js',

        '.ci/sprint-two/karma-env.js',
      ],
    },
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
