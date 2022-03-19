import styled from 'styled-components';
import { AVLTree } from '../../dataStructures/AVLTree/AVLTree';
import { TreeGrid } from '../TreeGrid/TreeGrid';

const TestComponent = () => {
  const avlTree = new AVLTree();
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

  return (
    <Wrapper>
      <TreeGrid tree={avlTree} />
    </Wrapper>
  );
};

export default TestComponent;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
