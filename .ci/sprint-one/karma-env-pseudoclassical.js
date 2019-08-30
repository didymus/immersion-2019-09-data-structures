const SPRINT_ONE = '../../sprint-one';

module.exports = function(environment) {
  environment
    .clean()
    .name('Sprint One - Pseudoclassical')
    .use(['mocha'])
    .add([
      `${SPRINT_ONE}/src/pseudoclassical/queue.js`,
      `${SPRINT_ONE}/src/pseudoclassical/stack.js`,
    ])
    .add(() => tests('pseudoclassical'));
};
