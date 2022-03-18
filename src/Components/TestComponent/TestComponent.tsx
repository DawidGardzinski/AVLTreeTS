import React, { useEffect } from 'react';
import { BST } from '../../dataStructures/BST/BST';
import { AVLTree } from '../../dataStructures/AVLTree/AVLTree';

const TestComponent = () => {
  // const tree = new BST(5);
  const avlTree = new AVLTree();

  useEffect(() => {
    avlTree.insert(7);
    avlTree.insert(5);
    avlTree.insert(3);
    avlTree.insert(0);
    avlTree.insert(15);
    avlTree.insert(4);
    avlTree.insert(13);
    avlTree.insert(8);
    avlTree.insert(2);
    avlTree.insert(11);
    avlTree.insert(10);
    avlTree.insert(9);
    avlTree.insert(12);
    avlTree.insert(1);
    avlTree.insert(6);
    console.log(avlTree.getRoot());
  }, []);

  return <div>test</div>;
};

export default TestComponent;
