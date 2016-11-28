import React from 'react';
import {
  Animated,
  Platform,
  View,
} from 'react-native';
import {
  NavigationStyles,
  StackNavigation,
} from '@exponent/ex-navigation';

export default class ModalScreen extends React.Component {
  static route = {
    styles: {
      ...NavigationStyles.SlideVertical,
      configureTransition: () => ({
        timing: Animated.spring,
        speed: 20,
        bounciness: 0,
        useNativeDriver: false,
      }),
      gestures: null,
    },
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <StackNavigation
          initialRoute={this.props.route.params.initialRoute}
          defaultRouteConfig={{
            styles: (Platform.OS === 'android' ?
              NavigationStyles.Fade :
              NavigationStyles.SlideHorizontalIOS
            ),
            navigationBar: {
              visible: true,
            },
          }}
        />
      </View>
    );
  }
}
