/* eslint-disable no-unused-vars */
import React from 'react';
import { Platform, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import navigationContext from './navigation/CustomNavigationContext';

const store = configureStore();
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <Provider store={store}>
          <NavigationProvider context={navigationContext}>
            <StackNavigation
              id="root"
              navigatorUID="root"
              initialRoute={Platform.OS === 'android' ? 'drawerNavigation' : 'tabNavigation'}
            />
          </NavigationProvider>
        </Provider>
      </View>
    );
  }
}
