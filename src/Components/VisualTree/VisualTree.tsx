import styled from 'styled-components';
import { Controls } from '../Controls/Controls';
import { TreeGrid } from '../TreeGrid/TreeGrid';

export const VisualTree = () => {
  return (
    <Wrapper>
      <TreeGrid />
      <Controls />
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
