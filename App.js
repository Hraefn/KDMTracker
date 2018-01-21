import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import text from './src/styles/text.js';


export default class App extends React.Component {
  render() {
    let logo = {
      uri: 'https://i.imgur.com/l4mVfe0.png'
    };

    return (
      <View style={styles.container}>
        <View style={styles.flexContainer1}>
        </View>
        <View style={styles.flexContainer2}>
          <Image source = {logo} style = {{width: 137, height: 267}}/>
        </View>  
        <View style={styles.flexContainer1}>
        <Text style = {text.title}>Kingdom Death Monster</Text>
        <Text style = {text.subtitle}>- Campaign Tracker -</Text>
        </View>
        <View style={styles.flexContainer1}>
        <Text style = {text.button}>Do you *really* want to push the button?</Text>
        </View>
        <View style={styles.flexContainer1}>        
        <Button
          large
          raised
          iconRight={{name: 'dice-d10', type: 'material-community'}}
          onPress={() => {
          Alert.alert('You had a destructive party! \n LOSE ALL RESOURCES!');
          }}
          title="Roll a d10"
          color= '#a3a3c2'
          backgroundColor= '#313335'
        />
      </View>
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
  flexContainer1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer3: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
}  
);
