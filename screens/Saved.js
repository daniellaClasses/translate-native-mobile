/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */

import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import tw from 'twrnc';

const Saved = () => {

    const [transl, setTransl] = useState();

    const getTranslation = async () => {
        try {
            const translations = await AsyncStorage.getAllKeys();
            setTransl(translations);
            console.log('Translations', translations);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getTranslation();
    }, []);

    return (
        <View style={tw`flex flex-1 p-6 bg-white`}>
            <View style={tw`flex flex-col`}>
                <Text style={tw`text-xl`}> My translations </Text>
                <View style={tw`flex-1 bg-slate-100`}></View>
            </View>
        </View>
    );
};

export default Saved;
