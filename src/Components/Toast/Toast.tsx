import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useMainContext } from '../../hooks/useMainContext';

export const GlobalToast = () => {
  const { state } = useMainContext();
  const { toast } = state;

  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    if (toast?.text) {
      setVisibility(true);
    }
  }, [toast]);

  if (!isVisible || !toast) return null;
  return (
    <Toast
      onAnimationEnd={() => {
        setVisibility(false);
      }}
    >
      {toast.text}
    </Toast>
  );
};

const fadeIn = keyframes`
 0% { opacity: 0;}
 10% { opacity: 1;}
 90% {opacity: 1;}
 100% {opacity: 0;}
`;

const Toast = styled.div`
  position: fixed;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  bottom: 100px;
  border-radius: ${({ theme }) => theme.radius.rounded};
  padding: ${({ theme }) => theme.space.m};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  animation-name: ${fadeIn};
  animation-duration: 5s;
  animation-iteration-count: 1;
`;
