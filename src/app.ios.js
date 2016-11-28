/* eslint-disable no-unused-vars */
// import { Navigation } from 'react-native-navigation';
// import { registerScreens } from './screens';
//
// import { iconsMap, iconsLoaded } from './utils/AppIcons';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

import {
  NavigationProvider,
  NavigationContext,
  NavigationStyles,
  StackNavigation,
} from '@exponent/ex-navigation';

import navigationContext from './navigation/CustomNavigationContext';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <Provider store={store}>
          <NavigationProvider context={navigationContext}>
            <StackNavigation
              id="root"
              navigatorUID="root"
              initialRoute="tabNavigation"
            />
          </NavigationProvider>
        </Provider>
      </View>
    );
  }

  // startApp() {
  //   Navigation.startTabBasedApp({
  //     tabs: [
  //       {
  //         label: 'Movies',
  //         screen: 'movieapp.Movies',
  //         icon: iconsMap['ios-film-outline'],
  //         selectedIcon: iconsMap['ios-film'],
  //         title: 'Movies',
  //         navigatorStyle
  //       },
  //       {
  //         label: 'TV Shows',
  //         screen: 'movieapp.Movies',
  //         icon: iconsMap['ios-desktop-outline'],
  //         selectedIcon: iconsMap['ios-desktop'],
  //         title: 'Movies',
  //         navigatorStyle
  //       }
  //     ],
  //     tabsStyle: {
  //       tabBarButtonColor: 'white',
  //       tabBarSelectedButtonColor: 'white',
  //       tabBarBackgroundColor: 'black'
  //     }
  //   });
  // }
}

export default App;
