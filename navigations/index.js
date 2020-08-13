import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AudioListContainer from '../screens/audioList/audioContainer';
import SongDetails from '../screens/SongDetails/songDetailsContainer'

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}

const AudioAppStack = createStackNavigator();
const AppStack = () => {
    return (
        <AudioAppStack.Navigator headerMode="none" initialRouteName="audioDetails" >
            <AudioAppStack.Screen name="audioPlaylist" component={AudioListContainer}></AudioAppStack.Screen>
            <AudioAppStack.Screen name="audioDetails" component={SongDetails}></AudioAppStack.Screen>
        </AudioAppStack.Navigator>
    )
}

export default AppNavigator;
