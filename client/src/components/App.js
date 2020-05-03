import React from 'react';
import GlobalStyles from './GlobalStyles';
import UserProvider from '../context';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <Router />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
