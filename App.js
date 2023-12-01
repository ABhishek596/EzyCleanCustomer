import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import Root from './src/root';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  )
}



export default App;