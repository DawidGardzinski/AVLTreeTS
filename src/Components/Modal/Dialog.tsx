import { ReactElement } from 'react';
import styled from 'styled-components';
import { Button } from '../common';

interface DialogProps {
  children?: ReactElement;
  onClose: () => void;
  title: string;
}

export const Dialog = ({ children, title, onClose }: DialogProps) => {
  return (
    <DialogWrapper>
      <Title>{title}</Title>
      <DialogContent>{children}</DialogContent>
      <DialogButton variant="inversed" p="m" onClick={onClose}>
        Close
      </DialogButton>
    </DialogWrapper>
  );
};

const DialogWrapper = styled.div`
  width: 500px;
  padding: ${({ theme }) => theme.space.m};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.rounded};
  display: grid;
`;

const Title = styled.h3`
  padding-bottom: ${({ theme }) => theme.space.s};
  height: fit-content;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.space.s};
`;

const DialogButton = styled(Button)`
  justify-self: end;
`;

const DialogContent = styled.div`
  margin: ${({ theme }) => theme.space.s};
`;
