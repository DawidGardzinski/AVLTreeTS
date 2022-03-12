interface INode {
  value: number;
  left: INode | null;
  right: INode | null;
}

interface IBST {
  insert: (value: number) => void;
  remove: (value: number) => void;
  search: (value: number) => INode | null;
  getRoot: () => INode | null;
}

export class BST implements IBST {
  private root: INode | null;
  constructor(initialRoot?: number) {
    this.root =
      typeof initialRoot !== 'undefined' ? this.createNode(initialRoot) : null;
  }

  private createNode(value: number): INode {
    return {
      value,
      left: null,
      right: null,
    };
  }

  private findMinNode(node: INode): INode {
    if (!node.left) return node;
    else return this.findMinNode(node.left);
  }

  private searchNode(node: INode | null, value: number): INode | null {
    if (!node) return null;
    if (value < node.value) return this.searchNode(node.left, value);
    if (value > node.value) return this.searchNode(node.right, value);
    return node;
  }

  private insertNode(currentNode: INode, nodeToInsert: INode) {
    if (currentNode.value > nodeToInsert.value) {
      if (!currentNode.left) currentNode.left = nodeToInsert;
      else this.insertNode(currentNode.left, nodeToInsert);
    } else {
      if (!currentNode.right) currentNode.right = nodeToInsert;
      else this.insertNode(currentNode.right, nodeToInsert);
    }
  }

  private removeNode(node: INode | null, value: number) {
    if (!node) return null;

    if (node.value > value) {
      node.left = this.removeNode(node.left, value);
      return node;
    }

    if (node.value < value) {
      node.right = this.removeNode(node.right, value);
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
    node.value = helper.value;

    node.right = this.removeNode(node.right, helper.value);
    return node;
  }

  insert(value: number) {
    const nodeToInsert = this.createNode(value);

    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }

    this.insertNode(this.root, nodeToInsert);
  }

  remove(value: number) {
    this.root = this.removeNode(this.root, value);
  }

  search(value: number) {
    return this.searchNode(this.root, value);
  }

  getRoot() {
    return this.root;
  }
}
