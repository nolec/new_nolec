import { css } from 'styled-components';
import logo_back from '../assets/cafe_box.jpg';

const background = () => css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const theme = {
  css: { background },
  files: {
    logo_back,
  },
};

export default theme;
