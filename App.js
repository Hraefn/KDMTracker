import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import text from './src/styles/text.js';
import { DrawerNavigator } from 'react-navigation'; 
import flex from './src/styles/flex.js';

    let logo = {
      uri: 'https://i.imgur.com/l4mVfe0.png'
    };

  const kdmHome = ({ navigation }) => (
      <View style={flex.container}>
      <View style={flex.container1}>
        </View>
        <View style={flex.container2}>
          <Image source = {logo} style = {{width: 137, height: 267}}/>
        </View>  
        <View style={flex.container1}>
        <Text style = {text.title}>Kingdom Death Monster</Text>
        <Text style = {text.subtitle}>- Campaign Tracker -</Text>
        
        </View>
        <Button
          large
          raised
          iconRight={{name: 'torsos-all', type: 'foundation'}}
          onPress={() => {
          Alert.alert('You had a destructive party! \n LOSE ALL RESOURCES!');  
          }}
          title="Select Your Campaign"
          color= '#a3a3c2'
          backgroundColor= '#313335'
          />
        <View style={flex.container1}>        
        <Button
          large
          raised
          iconRight={{name: 'torsos-all', type: 'foundation'}}
          onPress={() => {
          }}
          title="Create New Campaign"
          color= '#a3a3c2'
          backgroundColor= '#313335'
        />
      
    </View>
    </View>
  );
  
  const kdmSummary = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Summary Screen</Text>
    <Button
    onPress={() => navigation.navigate('Home')}
    title="Return home... wherever that is."
    color= '#a3a3c2'
    backgroundColor= '#313335'
    />
    </View>
    );
    
    const kdmPopulation = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Population Screen</Text>
    <Button
    onPress={() => navigation.navigate('Home')}
    title="Return home... wherever that is."
    color= '#a3a3c2'
    backgroundColor= '#313335'
    />
    </View>
    );
    
    const kdmInnovations = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Innovations Screen</Text>
    <Button
    onPress={() => navigation.navigate('Home')}
    title="Return home... wherever that is."
    color= '#a3a3c2'
    backgroundColor= '#313335'
    />
    </View>
    );
    
    const kdmLocations = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Location Screen</Text>
    <Button
    onPress={() => navigation.navigate('Home')}
    title="Return home... wherever that is."
    color= '#a3a3c2'
    backgroundColor= '#313335'
    />
    </View>
    );
    
    const kdmResources = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Resources Screen</Text>
    <Button
    onPress={() => navigation.navigate('Home')}
    title="Return home... wherever that is."
    color= '#a3a3c2'
    backgroundColor= '#313335'
    />
    </View>
    );
    
    const kdmGear = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Gear Screen</Text>
    <Button
    onPress={() => navigation.navigate('Home')}
    title="Return home... wherever that is."
    color= '#a3a3c2'
    backgroundColor= '#313335'
    />
    </View>
    );

const RootDrawer = DrawerNavigator({
  Home: { 
    screen: kdmHome,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Summary: { 
    screen: kdmSummary,
    navigationOptions: {
      drawerLabel: 'Summary',
    },
  },

  Population: { 
    screen: kdmPopulation,
    navigationOptions: {
      drawerLabel: 'Population',
    },
  },

Innovations: { 
    screen: kdmInnovations,
    navigationOptions: {
      drawerLabel: 'Innovations',
    },
  },

Locations: { 
    screen: kdmLocations,
    navigationOptions: {
      drawerLabel: 'Locations',
    },
  },

Resources: { 
    screen: kdmResources,
    navigationOptions: {
      drawerLabel: 'Resources',
    },
  },

Gear: { 
    screen: kdmGear,
    navigationOptions: {
      drawerLabel: 'Gear',
    },
  },

});

export default RootDrawer;
