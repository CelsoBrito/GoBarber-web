import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './style/global';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
