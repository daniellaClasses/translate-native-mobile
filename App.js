/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
// import type { Node } from 'react';


import { useEffect, useState } from 'react';
import { Button, Pressable, Text, View } from 'react';
import { Image } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './screens/Home';


const Saved = () => {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text> Saved </Text>
    </View>
  );
};

// const Logo = () => {
//   return <Image source={"./public/images"}
//     style={tw`w-[139px] h-[139px]`} />;
// }


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
      <Button title="Go Home" onPress={() => navigation.popToTop()} //por cuestión de perfomance, quita todas las que se han acumulado y vuelve al Home
      />
      <Button title="Go to details" onPress={() => navigation.navigate('Details', { params: { desc: description } })} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};


const Tab = createBottomTabNavigator();

function App() {
  // function App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
