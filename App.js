import React, {useState} from 'react';
import tw from 'twrnc';
import {
  Alert,
  Keyboard,
  Pressable,
  SafeAreaView, // Solo para iOs
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import LanguageSelector from './components/LanguageSelector';
import Field from './components/Fields';

function App() {
  const [language, setLanguage] = useState('es');
  const profileToast = () => {
    Alert.alert('Hola Mundo', 'Estamos en la Tierra.', [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Ok', onPress: () => console.log('Vale!')},
    ]);
  };
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      {/* Cabecera */}
      <View style={tw`px-8 py-4 flex flex-row items-center justify-between`}>
        <Text style={tw`text-2xl`}>Translate App</Text>
        <Pressable
          style={tw`rounded-full w-12 h-12 bg-slate-100 flex items-center justify-center`}
          onPress={profileToast}>
          <Text style={tw`text-slate-800  font-bold`}>ER</Text>
        </Pressable>
      </View>
      {/* Language Selector */}
      <LanguageSelector language={language} />

      <Field />
    </SafeAreaView>
  );
}

export default App;
