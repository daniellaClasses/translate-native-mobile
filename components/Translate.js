/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import tw from 'twrnc';
import { StarIcon } from 'react-native-heroicons/outline';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Translate = ({ text, language }) => {
  const [translated, setTranslated] = useState('');


  //sale error, pero es necesario para que funcione...
  useEffect(() => {
    useTranslation(text, language);
  }, [text, language]);

  const useTranslation = (text, language) => {
    const data = {
      q: text,
      target: language,
    };

    const translation = debounce(async () => {
      try {
        await fetch(
          'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI',
          {
            method: 'POST',
            body: JSON.stringify(data),
          },
        )
          .then(data => data.json())
          .then(t => {
            console.log(t.data.translations[0].translatedText)
            setTranslated(t.data.translations[0].translatedText)
          }
          );
      } catch (err) {
        console.log(err);
      }
    });

    return translation();
  };

  // Este tipo de funcione suele ir en utils
  const debounce = fn => {
    let id = null;

    return (...args) => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        fn(...args);
        id = null;
      }, 300);
    };
  };

  const saveTranslation = async (text, translated) => {
    console.log('Data', text, translated);
    try {
      await AsyncStorage.setItem(`@translation-${text}`, translated);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={tw`mt-8 px-8 w-full `}>
      <Text style={tw`mb-2`}>Your translation</Text>
      <View style={tw`relative bg-slate-100/60 rounded-md w-full min-h-30 px-4`}>
        <Pressable onPress={() => {
          // console.log('data', text, translated)
          saveTranslation(text, translated)}}
        style={tw`absolute top-2 right-2 z-10`}>
        <StarIcon color={tw.color('violet-400')} size={24} />
      </Pressable>
      <Text>{translated}</Text>
    </View>
    </View >
  );
};

export default Translate;
