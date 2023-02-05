import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Routes } from '@routes/index';
import theme from '@global/styles/theme';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
