const SPRINT_ONE = '../../sprint-one';

module.exports = function(environment) {
  environment
    .clean()
    .name('Sprint One - Functional')
    .use(['mocha'])
    .add([
      `${SPRINT_ONE}/src/functional/queue.js`,
      `${SPRINT_ONE}/src/functional/stack.js`,
    ])
    .add(() => tests('functional'));
};
