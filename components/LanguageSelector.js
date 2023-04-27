/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Text, View} from 'react-native';
import LANGUAGES from '../libs/languages';
import tw from 'twrnc';

const LanguageSelector = ({language}) => {
  return (
    <View style={tw`px-8`}>
      <Text style={tw`text-lg`}>Select your language</Text>
      <View style={tw`mt-4 flex flex-row flex-wrap gap-3`}>
        {LANGUAGES.map(l => {
          return (
            <Pressable
              key={l.value}
              style={tw`${
                language === l.value
                  ? 'bg-violet-100 border border-violet-200'
                  : 'bg-slate-100 border border-slate-200'
              } rounded p-2`}>
              <Text style={tw`text-violet-800 font-medium`}>{l.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default LanguageSelector;
