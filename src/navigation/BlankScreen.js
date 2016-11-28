import React from 'react';
import { View } from 'react-native';

export default class BlankScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Blank screen',
      translucent: true,
      backgroundColor: 'rgba(0,0,0,0.01)',
      titleStyle: {color: '#fff'},
    },
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}} />
    );
  }
}
