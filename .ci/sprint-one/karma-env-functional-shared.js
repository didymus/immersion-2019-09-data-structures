const SPRINT_ONE = '../../sprint-one';

module.exports = function(environment) {
  environment
    .clean()
    .name('Sprint One - Functional Shared')
    .use(['mocha'])
    .add([
      `${SPRINT_ONE}/src/functional-shared/queue.js`,
      `${SPRINT_ONE}/src/functional-shared/stack.js`,
    ])
    .add(() => tests('functional-shared'));
};
