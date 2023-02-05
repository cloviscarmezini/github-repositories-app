import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Routes } from '@routes/index';
import theme from '@global/styles/theme';

export default function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
