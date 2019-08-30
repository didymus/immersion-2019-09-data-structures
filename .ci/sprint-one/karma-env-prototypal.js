const SPRINT_ONE = '../../sprint-one';

module.exports = function(environment) {
  environment
    .clean()
    .name('Sprint One - Prototypal')
    .use(['mocha'])
    .add([
      `${SPRINT_ONE}/src/prototypal/queue.js`,
      `${SPRINT_ONE}/src/prototypal/stack.js`,
    ])
    .add(() => tests('prototypal'))
};
