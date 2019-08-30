const SPRINT_ONE = '../../sprint-one';

module.exports = function(environment) {
  environment
    .clean()
    .name('Sprint One - ES6')
    .use(['mocha'])
    .add([
      `${SPRINT_ONE}/src/es6/queue.js`,
      `${SPRINT_ONE}/src/es6/stack.js`,
    ])
    .add(() => tests('es6'));
};
