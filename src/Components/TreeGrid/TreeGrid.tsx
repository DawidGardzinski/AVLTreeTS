import { ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useMainContext } from '../../hooks/useMainContext';
import { Connections } from '../Connections/Connections';
import { Node } from './Node';

export const TreeGrid = () => {
  const { state, dispatch } = useMainContext();
  const { treeRerender, tree } = state;
  const treeHeight = tree.getRoot()?.height;
  const levelOrderWithNulls = tree.levelOrderWithNulls();
  const [isLoading, setLoading] = useState(true);

  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (treeRerender) {
      dispatch({ type: 'disableTreeRerender' });
    }
  }, [treeRerender, dispatch]);

  useEffect(() => {
    nodeRefs.current = nodeRefs.current.slice(0, levelOrderWithNulls?.length);

    if (nodeRefs.current.length !== levelOrderWithNulls?.length) {
      setLoading(false);
    }
  }, [levelOrderWithNulls]);

  if (treeHeight === undefined || !levelOrderWithNulls) return null;
  const numberOfLevels = treeHeight + 1;
  const numOfColumns = Math.pow(2, numberOfLevels - 1);
  const GridItems: ReactElement[] = [];
  let avaibleBoxes = numOfColumns;
  let numberOfBoxesForNode = numOfColumns;

  levelOrderWithNulls.forEach((el, index) => {
    GridItems.push(
      <GridItem
        key={`grid-item-${el}-${index}`}
        id={`grid-item-${index}`}
        style={{ gridColumn: `auto/span ${numberOfBoxesForNode}` }}
        ref={(item) => (nodeRefs.current[index] = item)}
      >
        <Node keyValue={el} />
      </GridItem>
    );
    if (avaibleBoxes - numberOfBoxesForNode === 0) {
      avaibleBoxes = numOfColumns;
      numberOfBoxesForNode = numberOfBoxesForNode / 2;
    } else {
      avaibleBoxes = avaibleBoxes - numberOfBoxesForNode;
    }
  });

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Wrapper>
        <Grid numOfRows={numberOfLevels} numOfColumns={numOfColumns}>
          {GridItems}
        </Grid>
      </Wrapper>
      <Connections nodeRefs={nodeRefs} arrayTree={levelOrderWithNulls} />
    </>
  );
};

const Grid = styled.div<{ numOfColumns: number; numOfRows: number }>`
  display: grid;
  gap: 15px;
  grid-template-columns: ${({ numOfColumns }) =>
    `repeat(${numOfColumns}, 65px)`};
  align-self: center;
  grid-template-rows: ${({ numOfRows }) => `repeat(${numOfRows}, 65px)`};
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  position: absolute;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
