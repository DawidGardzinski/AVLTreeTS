import styled, { css } from 'styled-components';
import { DefaultStyledComponent } from '../../../types/DefaultStyledComponent';

interface ButtonProps extends DefaultStyledComponent {
  variant?: 'default' | 'submit';
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant, ml, mr, mt, mb, m }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;
    border: ${variant ? `2px solid ${theme.colors.primary}` : 'none'};
    background-color: transparent;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease;
    border-radius: ${({ theme }) => theme.radius.rounded};

    ${ml && `margin-left: ${theme.space[ml]};`}
    ${mr && `margin-right: ${theme.space[mr]};`}
    ${mt && `margin-top: ${theme.space[mt]};`}
    ${mb && `margin-bottom: ${theme.space[mb]};`}
    ${m && `margin: ${theme.space[m]};`}

    :hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
    }
  `};
`;
