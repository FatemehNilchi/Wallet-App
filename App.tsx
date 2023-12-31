import React from 'react';
import {I18nManager} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/BottomTabNavigator';
import  './src/i18n';
import TabNavigator from './src/navigation/BottomTabNavigator';
I18nManager.forceRTL(false);

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
