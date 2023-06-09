/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';

import {
    Alert,
    Button,
    Pressable,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, // sólo para ios
    ScrollView,
    TouchableWithoutFeedback,
    Text,
    View,
} from 'react-native';


import LanguageSelector from '../components/LanguageSelector';
import Field from '../components/Field';
import Translate from '../components/Translate';

const Home = ( {navigation} ) => {
    const [language, setLanguage] = useState('es');
    const [text, setText] = useState('');
    const profileToast = () => {
        Alert.alert('Hola Mundo', 'Estamos en la Tierra.', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Ok', onPress: () => console.log('Vale!') },
        ]);
    };
    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS = 'ios' ? 'padding' : 'height'}
            style={tw`flex flex-1`}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <SafeAreaView style={tw`flex flex-1`}>
                        {/* cabecera */}
                        <View
                            style={tw`px-8 py-4 flex flex-row items-center justify-between`}>
                            <Text style={tw`text-2xl`}>Translate App</Text>
                            <Pressable
                                style={tw`rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center`}
                                onPress={profileToast}>
                                <Text style={tw`text-slate-800 font-extrabold`}> ER </Text>
                            </Pressable>
                        </View>
                        {/* Language Selector */}
                        <LanguageSelector language={language} setLanguage={setLanguage} />
                        <Field onValueChange={setText} />
                        <Translate text={text} language={language}/>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Home;
