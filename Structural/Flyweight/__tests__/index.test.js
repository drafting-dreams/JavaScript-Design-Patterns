import { Forest } from '../index'

test('Trees with same names, their treeTypes should be equal', () => {
  const forest = new Forest()

  const tree1 = forest.plantTree(1, 1, 'big tree', 'green', 'texture1')
  const tree2 = forest.plantTree(10, 10, 'big tree', 'green', 'texture1')

  expect(tree1.treeType).toBe(tree2.treeType)
})
