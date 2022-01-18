
import { createGlobalStyle } from "styled-components";
import Apple from './fonts/Apple ][.ttf';

const GlobalFontStyles = createGlobalStyle`
@font-face {
  font-family: 'Apple';
  src: url(${Apple }) format('ttf');
}`;

export default GlobalFontStyles;
