import React, { useEffect } from 'react';
import { BST } from '../../BST/BST';

const TestComponent = () => {
  const tree = new BST(5);
  useEffect(() => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(4);
    tree.insert(8);
    tree.remove(10);
    console.log(tree.getRoot());
    console.log(tree.search(10));
  }, []);
  return <div>test</div>;
};

export default TestComponent;
