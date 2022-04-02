import styled, { css } from 'styled-components';
import { DefaultStyledComponent } from '../../../types/DefaultStyledComponent';

interface ButtonProps extends DefaultStyledComponent {
  variant?: 'default' | 'submit' | 'inversed' | 'ghost';
}

export const Button = styled.button<ButtonProps>`
  ${({
    theme,
    variant,
    ml,
    mr,
    mt,
    mb,
    m,
    pl,
    pr,
    pt,
    pb,
    p,
    mx,
    my,
    px,
    py,
  }) => css`
    //default variant
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
    border: none;

    ${variant === 'inversed' &&
    css`
      color: ${theme.colors.primary};
      background-color: ${theme.colors.secondary};
    `}

    ${variant === 'submit' &&
    css`
      border: 2px solid ${theme.colors.primary};
    `}

    ${variant === 'ghost' &&
    css`
      color: ${theme.colors.primary};
      background-color: inherit;
    `}

    cursor: pointer;

    display: flex;
    align-items: center;
    transition: background-color 0.3s ease;
    border-radius: ${({ theme }) => theme.radius.rounded};

    ${mx && `margin: 0 ${theme.space[mx]};`}
    ${my && `margin: ${theme.space[my]} 0;`}
    ${ml && `margin-left: ${theme.space[ml]};`}
    ${mr && `margin-right: ${theme.space[mr]};`}
    ${mt && `margin-top: ${theme.space[mt]};`}
    ${mb && `margin-bottom: ${theme.space[mb]};`}
    ${m && `margin: ${theme.space[m]};`}

    ${px && `padding: 0 ${theme.space[px]};`}
    ${py && `padding: ${theme.space[py]} 0;`}
    ${pl && `padding-left: ${theme.space[pl]};`}
    ${pr && `padding-right: ${theme.space[pr]};`}
    ${pt && `padding-top: ${theme.space[pt]};`}
    ${pb && `padding-bottom: ${theme.space[pb]};`}
    ${p && `padding: ${theme.space[p]};`}

    :hover {
      //defaults
      color: ${theme.colors.primary};
      background-color: ${theme.colors.secondary};

      ${variant === 'inversed' &&
      css`
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.primary};
      `}

      ${variant === 'ghost' &&
      css`
        color: ${theme.colors.primary};
        background-color: inherit;
        opacity: 0.5;
      `}
    }
  `};
`;
