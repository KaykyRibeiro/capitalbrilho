import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
//import { getDatabaseConnection } from './src/database/conexao';

const App = () => {
  useEffect(() => {
    const checkDatabaseConnection = async () => {
      try {
        //const db = getDatabaseConnection();
        console.log('Database opened successfully');
      } catch (error) {
        console.error('Database connection error:', error);
      }
    };

    checkDatabaseConnection();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check the console for database onnection status.</Text>
    </View>
  );
};

export default App;
