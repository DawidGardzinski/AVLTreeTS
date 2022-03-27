import { BST } from '../BST/BST';
import { Node } from '../Node/Node';

export class AVLTree extends BST {
  private _insertNode(key: number, root: Node | null): Node {
    if (root === null) {
      return new Node(key);
    }

    if (key < root.key) {
      root.left = this._insertNode(key, root.left);
    } else if (key > root.key) {
      root.right = this._insertNode(key, root.right);
    } else {
      return root;
    }

    root.height = Math.max(root.leftHeight, root.rightHeight) + 1;
    const balance = root.leftHeight - root.rightHeight;

    if (balance === 2) {
      if (key < (root.left as Node).key) {
        //LL
        root = root.rotateRight();
      } else {
        //LR
        root.left = (root.left as Node).rotateLeft();
        return root.rotateRight();
      }
    }

    if (balance === -2) {
      if (key > (root.right as Node).key) {
        //RR
        root = root.rotateLeft();
      } else {
        //RL
        root.right = (root.right as Node).rotateRight();
        return root.rotateLeft();
      }
    }

    return root;
  }

  private _removeNode(key: number, root: Node | null): Node | null {
    if (root === null) {
      return root;
    }

    if (key < root.key) {
      root.left = this._removeNode(key, root.left);
    } else if (key > root.key) {
      root.right = this._removeNode(key, root.right);
    } else {
      if (!root.left && !root.right) {
        root = null;
      } else if (!root.left && root.right) {
        root = root.right;
      } else if (root.left && !root.right) {
        root = root.left;
      } else {
        const inOrderSuccessor = this.minValueNode(root.right as Node);
        root.key = inOrderSuccessor.key;
        root.right = this._removeNode(inOrderSuccessor.key, root.right);
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
      //LL
      if (rootLeftChildBalance === 0 || rootLeftChildBalance === 1) {
        return root.rotateRight();
      }
      //LR
      root.left = (root.left as Node).rotateLeft();
      return root.rotateRight();
    }

    if (balance === -2) {
      const rootRightChildBalance =
        (root.right as Node).leftHeight - (root.right as Node).rightHeight;
      //RR
      if (rootRightChildBalance === 0 || rootRightChildBalance === -1) {
        return root.rotateLeft();
      }
      //RL
      root.right = (root.right as Node).rotateRight();
      return root.rotateLeft();
    }

    return root;
  }

  insert(key: number): void {
    this.root = this._insertNode(key, this.root);
  }

  remove(key: number): void {
    this.root = this._removeNode(key, this.root);
  }
}
