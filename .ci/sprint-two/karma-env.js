const SPRINT_TWO = '../../sprint-two';

module.exports = function(environment) {
  environment
    .name('Sprint Two')
    .use(['mocha'])
    .add(() => window.expect = chai.expect)
    .add([
      `${SPRINT_TWO}/src/binarySearchTree.js`,
      `${SPRINT_TWO}/src/graph.js`,
      `${SPRINT_TWO}/src/hashTableHelpers.js`,
      `${SPRINT_TWO}/src/hashTable.js`,
      `${SPRINT_TWO}/src/linkedList.js`,
      `${SPRINT_TWO}/src/set.js`,
      `${SPRINT_TWO}/src/tree.js`,

      `${SPRINT_TWO}/test/binarySearchTreeSpec.js`,
      `${SPRINT_TWO}/test/graphSpec.js`,
      `${SPRINT_TWO}/test/hashTableSpec.js`,
      `${SPRINT_TWO}/test/linkedListSpec.js`,
      `${SPRINT_TWO}/test/setSpec.js`,
      `${SPRINT_TWO}/test/treeSpec.js`,
    ]);
};