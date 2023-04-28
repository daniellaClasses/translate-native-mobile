/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {FlatList, Pressable, Text, View} from 'react-native';
import {useState, useEffect} from 'react';

import LANGUAGES from '../libs/languages';

import tw from 'twrnc';

const LanguageSelector = ({language, setLanguage}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    const selectedLanguageIndex = LANGUAGES.findIndex(
      item => item.value === language,
    );
    setSelectedLanguage(selectedLanguageIndex);
  }, [language]);

  return (
    <View>
      <View style={tw`flex flex-row items-center`}>
        <Text style={tw`text-lg pl-8 pr-2`}>Selected language</Text>
        <View
          style={tw`px-2 py-1 border border-slate-200 bg-slate-100 rounded-lg bg-slate-200`}>
          <Text style={tw`uppercase font-medium`}>
            {LANGUAGES[selectedLanguage]?.value}
          </Text>
        </View>
      </View>
      <View style={tw`mt-4 flex flex-row flex-wrap gap-3`}>
        <FlatList
          data={LANGUAGES}
          renderItem={({item, index}) => (
            <Pressable
              style={tw`${
                language === item.value
                  ? 'bg-violet-100 border-violet-200'
                  : 'bg-slate-100 border-slate-200'
              } border rounded-xl p-2 w-40 h-40 flex items-center justify-center shadow-black/70 shadow-opacity-10 shadow-offset-[0px]/[12px] shadow-radius-2 elevation-10`}
              onPress={() => {
                setLanguage(item.value);
              }}>
              <Text style={tw`text-violet-800 text-lg font-medium`}>
                {item.label}
              </Text>
            </Pressable>
          )}
          keyExtractor={item => item.label}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={tw`w-2`}></View>}
          contentContainerStyle={tw`p-8`}
        />
      </View>
    </View>
  );
};

export default LanguageSelector;
