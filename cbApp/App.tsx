import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import appStyles from './src/styles/styleApp';


export default function App() {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Bem-vindo ao Capital Brilho!</Text>
      <Text style={appStyles.subtitle}>Por favor, faça login</Text>
      <View style={appStyles.inputContainer}>
        <Text style={appStyles.inputLabel}>Email</Text>
        <TextInput style={appStyles.input} />
      </View>
      <View style={appStyles.inputContainer}>
        <Text style={appStyles.inputLabel}>Senha</Text>
        <TextInput secureTextEntry style={appStyles.input} />
      </View>
      <View style={appStyles.submitContainer}>
        <Text style={[appStyles.submit, {textAlign: 'center'}]} onPress={() => console.log('Logado !')}>
          <Text>Avançar</Text>
        </Text>
      </View>
    </View>
  );
}
