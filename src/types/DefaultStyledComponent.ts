import { DefaultTheme } from 'styled-components';

type Space = keyof Pick<DefaultTheme, 'space'>['space'];

export interface DefaultStyledComponent {
  ml?: Space;
  mr?: Space;
  mt?: Space;
  mb?: Space;
  m?: Space;
}
