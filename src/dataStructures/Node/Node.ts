export class Node {
  public left: Node | null = null;
  public right: Node | null = null;
  public height: number | null = null;

  constructor(public key: number) {}

  public rotateRight(): Node {
    const leftChild = this.left as Node;
    this.left = leftChild.right;
    leftChild.right = this;
    this.height = Math.max(this.leftHeight, this.rightHeight) + 1;
    leftChild.height = Math.max(leftChild.leftHeight, this.height) + 1;
    return leftChild;
  }

  public rotateLeft(): Node {
    const rightChild = this.right as Node;
    this.right = rightChild.left;
    rightChild.left = this;
    this.height = Math.max(this.leftHeight, this.rightHeight) + 1;
    rightChild.height = Math.max(rightChild.rightHeight, this.height) + 1;
    return rightChild;
  }

  public get leftHeight(): number {
    if (this.left === null) {
      return -1;
    }
    return this.left.height || 0;
  }

  public get rightHeight(): number {
    if (this.right === null) {
      return -1;
    }
    return this.right.height || 0;
  }
}
