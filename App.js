import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { bootsrtrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import store from './src/store';

export default function App() {
  const [ isReady, setIsReady ] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootsrtrap}
        onFinish={() => setIsReady(true)}
        onError={error => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
