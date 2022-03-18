import { ReactElement } from 'react';
import styled from 'styled-components';
import { BST } from '../../dataStructures/BST/BST';
import { Node } from './Node';

interface TreeGridProps {
  tree: BST;
}

export const TreeGrid = ({ tree }: TreeGridProps) => {
  const treeHeight = tree.getRoot()?.height;
  const levelOrderWithNulls = tree.levelOrderWithNulls();

  if (!treeHeight || !levelOrderWithNulls) return null;
  const numberOfLevels = treeHeight + 1;
  const numOfColumns = Math.pow(2, numberOfLevels - 1);
  const GridItems: ReactElement[] = [];
  let avaibleBoxes = numOfColumns;
  let numberOfBoxesForNode = numOfColumns;

  levelOrderWithNulls.forEach((el, index) => {
    GridItems.push(
      <GridItem
        key={`grid-item-${el}-${index}`}
        style={{ gridColumn: `auto/span ${numberOfBoxesForNode}` }}
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

  return (
    <Grid numOfRows={numberOfLevels} numOfColumns={numOfColumns}>
      {GridItems}
    </Grid>
  );
};

const Grid = styled.div<{ numOfColumns: number; numOfRows: number }>`
  display: grid;
  gap: 15px;
  grid-template-columns: ${({ numOfColumns }) =>
    `repeat(${numOfColumns}, 65px)`};
  grid-template-rows: ${({ numOfRows }) => `repeat(${numOfRows}, 65px)`};
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
