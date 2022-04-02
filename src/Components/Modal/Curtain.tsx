import styled from 'styled-components';

export const Curtain = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondary + 'ee'};
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
`;
