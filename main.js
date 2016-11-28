/* eslint-disable no-unused-vars */
import React from 'react';
import { Ionicons } from '@exponent/vector-icons';
import Exponent from 'exponent';
import App from './src/app';

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
