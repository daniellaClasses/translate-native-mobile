/* eslint-disable prettier/prettier*/
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import tw from 'twrnc';

const Field = ({onValueChange}) => {
    const [text, setText] = useState();
    return (
        <View style={tw`px-8`}>
            <TextInput
                multiline={true}
                numberOfLines={2}
                defaultValue={text}
                onChangeText={(textInput) => {
                    setText(textInput);
                    onValueChange(textInput);
                    // console.log('TEXTO 1', console.log(textInput), 'TEXTO 2', text);
                }}
                textAlignVertical="top"
                style={tw`border border-slate-200 rounded-md h-auto max-h-30 p-3`} />
        </View>
    );
};

export default Field;
