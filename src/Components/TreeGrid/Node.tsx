import styled from 'styled-components';

interface NodeProps {
  keyValue: number | null;
}

export const Node = ({ keyValue }: NodeProps) => {
  return <Wrapper isVisible={keyValue !== null}>{keyValue}</Wrapper>;
};

const Wrapper = styled.div<{ isVisible: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid black;
  text-align: center;
  line-height: 60px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  background-color: ${({ theme }) => theme.colors.primary};
`;
