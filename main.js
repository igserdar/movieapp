/* eslint-disable no-unused-vars */
import React from 'react';
import Exponent from 'exponent';
import { Platform, View } from 'react-native';
import { Ionicons } from '@exponent/vector-icons';

import { Provider } from 'react-redux';
import store from './state/store';

import navigationContext from './navigation/CustomNavigationContext';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';

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

class AppContainer extends React.Component {
  state = {
    isLoaded: false,
  }

  async componentWillMount() {
    await Exponent.Font.loadAsync(Ionicons.font)
    this.setState({isLoaded: true});
  }

  render() {
    if (!this.state.isLoaded) {
      return <Exponent.Components.AppLoading />;
    }

    return <App />;
  }
}

Exponent.registerRootComponent(AppContainer);
