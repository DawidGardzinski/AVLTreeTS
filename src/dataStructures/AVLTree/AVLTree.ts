import { Node } from '../Node/Node';

export class AVLTree {
  protected _root: Node | null = null;

  constructor() {
    this._root = null;
  }

  public insert(key: number): void {
    this._root = this._insert(key, this._root);
  }

  private _insert(key: number, root: Node | null): Node {
    if (root === null) {
      return new Node(key);
    }

    if (key < root.key) {
      root.left = this._insert(key, root.left);
    } else if (key > root.key) {
      root.right = this._insert(key, root.right);
    } else {
      return root;
    }

    root.height = Math.max(root.leftHeight, root.rightHeight) + 1;
    const balance = root.leftHeight - root.rightHeight;

    if (balance === 2) {
      if (key < (root.left as Node).key) {
        // Left left case
        root = root.rotateRight();
      } else {
        // Left right case
        root.left = (root.left as Node).rotateLeft();
        return root.rotateRight();
      }
    }

    if (balance === -2) {
      if (key > (root.right as Node).key) {
        // Right right case
        root = root.rotateLeft();
      } else {
        // Right left case
        root.right = (root.right as Node).rotateRight();
        return root.rotateLeft();
      }
    }

    return root;
  }

  public delete(key: number): void {
    this._root = this._delete(key, this._root);
  }

  private _delete(key: number, root: Node | null): Node | null {
    if (root === null) {
      return root;
    }

    if (key < root.key) {
      root.left = this._delete(key, root.left);
    } else if (key > root.key) {
      root.right = this._delete(key, root.right);
    } else {
      if (!root.left && !root.right) {
        root = null;
      } else if (!root.left && root.right) {
        root = root.right;
      } else if (root.left && !root.right) {
        root = root.left;
      } else {
        const inOrderSuccessor = this._minValueNode(root.right as Node);
        root.key = inOrderSuccessor.key;
        root.right = this._delete(inOrderSuccessor.key, root.right);
      }
    }

    if (root === null) {
      return root;
    }

    root.height = Math.max(root.leftHeight, root.rightHeight) + 1;
    const balance = root.leftHeight - root.rightHeight;

    if (balance === 2) {
      const rootLeftChildBalance =
        (root.left as Node).leftHeight - (root.left as Node).rightHeight;
      // Left left case
      if (rootLeftChildBalance === 0 || rootLeftChildBalance === 1) {
        return root.rotateRight();
      }
      // Left right case
      root.left = (root.left as Node).rotateLeft();
      return root.rotateRight();
    }

    if (balance === -2) {
      const rootRightChildBalance =
        (root.right as Node).leftHeight - (root.right as Node).rightHeight;
      // Right right case
      if (rootRightChildBalance === 0 || rootRightChildBalance === -1) {
        return root.rotateLeft();
      }
      // Right left case
      root.right = (root.right as Node).rotateRight();
      return root.rotateLeft();
    }

    return root;
  }

  getRoot() {
    return this._root;
  }

  private _minValueNode(node: Node): Node {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  preOrder(node: Node | null = this._root): number[] {
    if (node !== null) {
      return [
        node.key,
        ...this.preOrder(node.left),
        ...this.preOrder(node.right),
      ];
    }
    return [];
  }

  inOrder(node: Node | null = this._root): number[] {
    if (node !== null) {
      return [
        ...this.inOrder(node.left),
        node.key,
        ...this.inOrder(node.right),
      ];
    }
    return [];
  }

  postOrder(node: Node | null = this._root): number[] {
    if (node !== null) {
      return [
        ...this.inOrder(node.left),
        ...this.inOrder(node.right),
        node.key,
      ];
    }
    return [];
  }
}
