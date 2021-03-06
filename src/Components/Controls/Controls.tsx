import styled from 'styled-components';
import { useMainContext } from '../../hooks/useMainContext';
import { Dropdown } from '../common';
import { Control } from './Control';
import { More } from './More';

export const Controls = () => {
  const {
    state: { tree },
    dispatch,
  } = useMainContext();
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
      <Control
        type="search"
        cb={(key: number) => {
          dispatch({
            type: 'modalManipulation',
            payload: {
              type: 'search',
              visibility: 'visible',
              data: tree.search(key),
            },
          });
        }}
      />
      <Divider />
      <Dropdown
        options={[
          {
            label: 'Create from file',
            action: () => {
              dispatch({
                type: 'modalManipulation',
                payload: {
                  type: 'upload',
                  visibility: 'visible',
                },
              });
            },
          },
          {
            label: 'Save on disk',
            action: () => {
              dispatch({
                type: 'modalManipulation',
                payload: {
                  type: 'download',
                  visibility: 'visible',
                },
              });
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
