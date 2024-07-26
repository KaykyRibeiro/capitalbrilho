import React, { useEffect } from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import appStyles from './src/styles/styleApp';
import { getDatabaseConnection } from './src/modal/conexao';

export default function App() {

  useEffect(() => {
    const checkDatabaseConnection = async () => {
      try {
        await getDatabaseConnection();
        console.log('Database connection verified');
      } catch (error) {
        console.error('Database connection error: ');
      }
    };

    checkDatabaseConnection();
  }, []);

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
