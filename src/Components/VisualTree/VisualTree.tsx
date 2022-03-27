import styled from 'styled-components';
import { AVLTree } from '../../dataStructures/AVLTree/AVLTree';
import { Controls } from '../Controls/Controls';
import { TreeGrid } from '../TreeGrid/TreeGrid';

export const VisualTree = () => {
  const avlTree = new AVLTree();

  return (
    <Wrapper>
      <TreeGrid tree={avlTree} />
      <Controls tree={avlTree} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
