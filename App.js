

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import AudioListContainer from './screens/audioList/audioContainer';
import SongDetails from './screens/SongDetails/songDetailsContainer';


const Stack = createStackNavigator();



class App extends Component {
constructor(props){
  super(props);
  this.state ={

  }
}

componentDidMount() {
  // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();
}

  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              headerMode="none"
              screenOptions={{
                headerTintColor: 'white',
              }}
            >
              <Stack.Screen
                name="Home"
                component={AudioListContainer}
                options={{
                  title: 'Awesome app',
                }}
              />
              <Stack.Screen
                name="Profile"
                component={SongDetails}
                options={{
                  title: 'My profile',
                }}
              />
              <Stack.Screen
                name="Settings"
                component={SongDetails}
                options={{
                  gestureEnabled: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
  
      </>
    );
  }
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
