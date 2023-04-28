/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
// import type { Node } from 'react';


import { useEffect, useState } from 'react';
import { Button, Pressable, Text, View } from 'react';
import { Image } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { HomeIcon } from 'react-native-heroicons/outline';
import { HomeIcon as HomeIconSolid } from 'react-native-heroicons/solid';
import { StarIcon } from 'react-native-heroicons/outline';
import { StarIcon as StarIconSolid } from 'react-native-heroicons/solid';

import Home from './screens/Home';
import Saved from './screens/Saved';

const DetailsScreen = ({ route, navigation }) => {
  // console.log(route.params);
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text> Details Screen</Text>
      <Text> {route.params?.description} </Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile', { info: 'Otra info' })} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ProfileScreen = ({ route, navigation }) => {
  const { id, info } = route.params;
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription('Otra descripción');
  }, []);

  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text> Profile Screen</Text>
      <Text> {id}</Text>
      <Text> {info}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};


const Tab = createBottomTabNavigator();

function App() {
  // function App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              return (focused ?
                <HomeIconSolid color={tw.color('violet-600')} size={20} />
                :
                <HomeIcon color={tw.color('gray-400')} size={20} />
              );
            } else if (route.name === 'Saved') {
              return (focused ?
                <StarIconSolid color={tw.color('violet-600')} size={20} />
                :
                <StarIcon color={tw.color('gray-400')} size={20} />
              );
            }
          },
          tabBarLabelStyle: {
            marginTop: -10,
            marginBottom: 7,
          },
          unmountOnBlur: true,
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }} />
        <Tab.Screen
          name="Saved"
          component={Saved} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

export default App;
