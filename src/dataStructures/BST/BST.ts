import { Node } from '../Node/Node';

interface IBST {
  insert: (key: number) => void;
  remove: (key: number) => void;
  search: (key: number) => Node | null;
  getRoot: () => Node | null;
}

export class BST implements IBST {
  protected root: Node | null;
  constructor() {
    this.root = null;
  }

  protected findMinNode(node: Node): Node {
    if (!node.left) return node;
    else return this.findMinNode(node.left);
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

    const helper = this.findMinNode(node.right);
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

  getRoot() {
    return this.root;
  }
}
