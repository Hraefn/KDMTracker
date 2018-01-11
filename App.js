import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let logo = {
      uri: 'https://i.imgur.com/l4mVfe0.png'
    };

    return (
      <View style={styles.container}>
      <Image source = {logo} style = {{width: 137, height: 267}}/>
        <Text>{' '}</Text>
        <Text>{' '}</Text>
        <Text style = {styles.titleText}>Kingdom Death Monster</Text>
        <Text style = {styles.subtitleText}>- Campaign Tracker -</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212223',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c61d29'
  },
  subtitleText: {
    fontSize: 18,
    color: 'white'
  }

});
