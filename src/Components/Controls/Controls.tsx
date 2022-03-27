import styled from 'styled-components';
import { BST } from '../../dataStructures/BST/BST';
import { useMainContext } from '../../hooks/useMainContext';
import { Dropdown } from '../common';
import { Control } from './Control';
import { More } from './More';

interface ControlsProps {
  tree: BST;
}

export const Controls = ({ tree }: ControlsProps) => {
  const { dispatch } = useMainContext();
  const testCb = (key: number) => {
    console.log(tree.getRoot());

    dispatch({ type: 'enableTreeRerender' });
  };
  return (
    <Wrapper>
      <Control
        type="insert"
        cb={(key: number) => {
          tree.insert(key);
          dispatch({ type: 'enableTreeRerender' });
        }}
      />
      <Divider />
      <Control
        type="delete"
        cb={(key: number) => {
          tree.remove(key);
          dispatch({ type: 'enableTreeRerender' });
        }}
      />
      <Divider />
      <Control type="search" cb={testCb} />
      <Divider />
      <Dropdown
        options={[
          {
            label: 'Create from file',
            action: () => {
              console.log('log');
            },
          },
          {
            label: 'Save on disk',
            action: () => {
              console.log('log');
            },
          },
        ]}
      >
        <More />
      </Dropdown>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  background-color: #000000dd;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  padding: 10px 20px;
  align-items: center;
  z-index: 10;
`;

const Divider = styled.div`
  width: 2px;
  margin: 0 ${({ theme }) => theme.space.m};
  height: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.9;
`;
