import { Node } from '../Node/Node';

export class BST {
  protected root: Node | null;
  constructor() {
    this.root = null;
  }

  protected minValueNode(node: Node): Node {
    if (!node.left) return node;
    else return this.minValueNode(node.left);
  }

  protected searchNode(node: Node | null, key: number): Node | null {
    if (!node) return null;
    if (key < node.key) return this.searchNode(node.left, key);
    if (key > node.key) return this.searchNode(node.right, key);
    return node;
  }

  private insertNode(currentNode: Node, nodeToInsert: Node) {
    if (currentNode.key > nodeToInsert.key) {
      if (!currentNode.left) currentNode.left = nodeToInsert;
      else this.insertNode(currentNode.left, nodeToInsert);
    } else {
      if (!currentNode.right) currentNode.right = nodeToInsert;
      else this.insertNode(currentNode.right, nodeToInsert);
    }
  }

  private removeNode(node: Node | null, key: number) {
    if (!node) return null;

    if (node.key > key) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (node.key < key) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (!node.left && !node.right) {
      node = null;
      return node;
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left;
      return node;
    }

    const helper = this.minValueNode(node.right);
    node.key = helper.key;

    node.right = this.removeNode(node.right, helper.key);
    return node;
  }

  insert(key: number) {
    const nodeToInsert = new Node(key);

    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }

    this.insertNode(this.root, nodeToInsert);
  }

  remove(key: number) {
    this.root = this.removeNode(this.root, key);
  }

  search(key: number) {
    return this.searchNode(this.root, key);
  }

  preOrder(node: Node | null = this.root): number[] {
    if (node !== null) {
      return [
        node.key,
        ...this.preOrder(node.left),
        ...this.preOrder(node.right),
      ];
    }
    return [];
  }

  inOrder(node: Node | null = this.root): number[] {
    if (node !== null) {
      return [
        ...this.inOrder(node.left),
        node.key,
        ...this.inOrder(node.right),
      ];
    }
    return [];
  }

  postOrder(node: Node | null = this.root): number[] {
    if (node !== null) {
      return [
        ...this.inOrder(node.left),
        ...this.inOrder(node.right),
        node.key,
      ];
    }
    return [];
  }

  levelOrder(node: Node | null = this.root) {
    if (!node) return;
    const result = [];
    const queue: Node[] = [];
    queue.push(node);
    while (!(queue.length === 0)) {
      const currentNode = queue.shift();
      result.push(currentNode?.key);
      if (currentNode && currentNode.left !== null)
        queue.push(currentNode.left);
      if (currentNode && currentNode.right !== null)
        queue.push(currentNode.right);
    }
    return result;
  }

  levelOrderWithNulls(node: Node | null = this.root) {
    if (!node) return;
    const result: (number | null)[] = [];
    const height = node.height || 0;
    const numOfLevels = height + 1;
    const numOfNodes = Math.pow(2, numOfLevels) - 1;
    let currentLevel = 1;
    let numOfNodesInCurrentLevel = 1;
    let usedNodesInLevel = 0;

    const queue: (Node | null)[] = [];
    queue.push(node);
    for (let i = 0; i < numOfNodes; i++) {
      if (usedNodesInLevel === numOfNodesInCurrentLevel) {
        currentLevel++;
        numOfNodesInCurrentLevel = Math.pow(2, currentLevel - 1);
        usedNodesInLevel = 0;
      }

      const currentNode = queue.shift();
      if (currentLevel === numOfLevels) {
        result.push(currentNode?.key ?? null);
      } else {
        result.push(currentNode?.key ?? null);
        queue.push(currentNode ? currentNode.left : null);
        queue.push(currentNode ? currentNode.right : null);
      }

      usedNodesInLevel++;
    }
    return result;
  }

  getRoot() {
    return this.root;
  }
}
