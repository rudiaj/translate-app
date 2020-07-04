import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
  font-family: 'SF Pro Text', sans-serif, 'Roboto','Helvetica Neue';
  background-color: rgb(242,245,247);
  display: flex;
  color: #242c33;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.625rem;
}
`;


export default GlobalStyles;