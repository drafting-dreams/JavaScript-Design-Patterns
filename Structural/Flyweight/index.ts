/**
 * Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM
 * by sharing common parts of state between multiple objects instead of keeping all of the data in each object.
 */

class TreeType {
  name: string
  color: string
  texture: string

  constructor(name: string, color: string, texture: string) {
    this.name = name
    this.color = color
    this.texture = texture
  }
}

class TreeFactory {
  map: Map<string, TreeType> = new Map()

  getTree(name: string, color: string, texture: string) {
    if (!this.map.has(name)) {
      this.map.set(name, new TreeType(name, color, texture))
    }

    return this.map.get(name)
  }
}

class Tree {
  x: number
  y: number
  treeType: TreeType
  constructor(x: number, y: number, treeType: TreeType) {
    this.x = x
    this.y = y
    this.treeType = treeType
  }
}

export class Forest {
  trees: Array<Tree> = []
  factory = new TreeFactory()

  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string,
  ) {
    const tree = new Tree(x, y, this.factory.getTree(name, color, texture))
    this.trees.push(tree)

    return tree
  }
}

/**
 * We have planted 5 trees, but only created 2 tree types.
 * The trees can just use these two tree types as their type info.
 * Imagine we have one million trees, and how much RAM we can save.
 */
const forest = new Forest()
forest.plantTree(1, 1, 'big tree', 'green', 'texture1')
forest.plantTree(1, 10, 'big tree', 'green', 'texture1')
forest.plantTree(1, 20, 'big tree', 'green', 'texture1')
forest.plantTree(5, 1, 'small tree', 'yellow', 'texture2')
forest.plantTree(5, 2, 'small tree', 'yellow', 'texture2')
