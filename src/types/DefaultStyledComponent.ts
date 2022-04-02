import { DefaultTheme } from 'styled-components';

type Space = keyof Pick<DefaultTheme, 'space'>['space'];

export interface DefaultStyledComponent {
  ml?: Space;
  mr?: Space;
  mt?: Space;
  mb?: Space;
  m?: Space;
  pl?: Space;
  pr?: Space;
  pt?: Space;
  pb?: Space;
  p?: Space;
  my?: Space;
  mx?: Space;
  py?: Space;
  px?: Space;
}
