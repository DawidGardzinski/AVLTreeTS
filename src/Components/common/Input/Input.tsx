import styled, { css } from 'styled-components';
import { DefaultStyledComponent } from '../../../types/DefaultStyledComponent';

interface InputProps extends DefaultStyledComponent {
  width?: number;
}

export const Input = styled.input<InputProps>`
  ${({ theme, width, ml, mr, mt, mb, m }) => css`
    ${width && `width: ${width}px;`}
    ${ml && `margin-left: ${theme.space[ml]};`}
    ${mr && `margin-right: ${theme.space[mr]};`}
    ${mt && `margin-top: ${theme.space[mt]};`}
    ${mb && `margin-bottom: ${theme.space[mb]};`}
    ${m && `margin: ${theme.space[m]};`}
  `};
`;
