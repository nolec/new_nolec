import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const globalStyles = createGlobalStyle`
${reset};
*,::before,::after{
    box-sizing : border-box;
}
body {
    width: 100%;
    overflow-x: hidden;
    padding: 0;
    word-break: break-word;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #f3f3f3;
}
img{
    vertical-align: middle;
    border-style: none;
}
p {
    line-height: 1.75;
}
a {
  color: #fff;
  cursor:pointer;
  text-decoration : none;
  transition : all .3s cubic-bezier(0.42, 0, 0.58, 1);
}
a:hover {
    text-decoration:none !important;
    color: #ffa600;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color:#000;
}
`;
export default globalStyles;
