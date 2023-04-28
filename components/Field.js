/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import tw from 'twrnc';


const Field = ({onValueChange}) => {
  const [text, setText] = useState('');

  return (
    <View style={tw`px-8`}>
      <Text style={tw`mb-2`}> Your text here </Text>
      <TextInput
        style={tw`relative z-50 border border-slate-200 rounded-md h-auto max-h-30 p-3`}
        multiline={true}
        numberOfLines={2}
        defaultValue={text}
        textAlignVertical="top"
        value={text}
        onChangeText={textInput => {
          console.log('TEXT 1', textInput, 'TEXT 2', text);
          setText(textInput);
          onValueChange(textInput);
        }}
      />
    </View>
  );
};

export default Field;
